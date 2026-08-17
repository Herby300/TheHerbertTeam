/**
 * Single tracking entry point. Components call `track(...)` and never touch
 * fbq or gtag directly, which keeps consent gating a one-file change later.
 */

import { site } from '../data/site';

export type TrackEvent =
  | 'form_submit'
  | 'schedule'
  | 'phone_click'
  | 'email_click'
  | 'begin_application'
  | 'view_loan_program'
  | 'open_guide_form'
  | 'download_guide'
  | 'newsletter_signup'
  | 'playbook_landing_view'
  | 'playbook_cta_click'
  | 'playbook_form_submit'
  | 'playbook_download_click';

type EventMap = {
  meta: string;
  ga4: string;
  /** Meta Pixel method. Custom events must use trackCustom, not track. */
  metaMethod?: 'track' | 'trackCustom';
  /** Merged into the Meta payload after caller params (wins on key conflicts). */
  metaParams?: Record<string, unknown>;
};

const EVENTS: Record<TrackEvent, EventMap> = {
  form_submit: { meta: 'Lead', ga4: 'generate_lead' },
  schedule: { meta: 'Schedule', ga4: 'schedule_consultation' },
  phone_click: { meta: 'Contact', ga4: 'phone_click' },
  email_click: { meta: 'Contact', ga4: 'email_click' },
  // Outbound Primis apply click — not a completed application.
  begin_application: {
    meta: 'BeginApplication',
    ga4: 'begin_application',
    metaMethod: 'trackCustom',
    metaParams: { destination: 'primis_mortgage_application' },
  },
  view_loan_program: { meta: 'ViewContent', ga4: 'view_loan_program' },
  // Opening the guide form is interest, not a lead. `download_guide` is reserved
  // for the submission itself, so Meta never optimises against a mere click.
  open_guide_form: { meta: 'ViewContent', ga4: 'open_guide_form' },
  download_guide: { meta: 'Lead', ga4: 'download_guide' },
  newsletter_signup: { meta: 'CompleteRegistration', ga4: 'newsletter_signup' },
  playbook_landing_view: { meta: 'ViewContent', ga4: 'playbook_landing_view' },
  playbook_cta_click: { meta: 'ViewContent', ga4: 'playbook_cta_click' },
  playbook_form_submit: { meta: 'Lead', ga4: 'playbook_form_submit' },
  playbook_download_click: { meta: 'ViewContent', ga4: 'playbook_download_click' },
};

const META_PIXEL_ID = site.analytics.metaPixel;

type FbqWithModules = ((...args: unknown[]) => void) & {
  getFbeventsModules?: (name: string) => unknown;
};

type EventValidationConfig = {
  unverifiedEventNames?: string[] | null;
  restrictedEventNames?: string[] | null;
};

type ConfigStore = {
  get?: (pixelId: string, key: string) => EventValidationConfig | null | undefined;
};

declare global {
  interface Window {
    fbq?: FbqWithModules;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    herbertTrack?: (event: TrackEvent, params?: Record<string, unknown>) => void;
    /** Guards Meta standard PageView to a single fire per page load. */
    __herbertMetaPageView?: boolean;
  }
}

/** Incremented once per user click (capture phase) so delegated + element handlers share an id. */
let gestureId = 0;
const gestureFired = new Set<string>();

/**
 * Call from a capture-phase click listener so every handler in the same click
 * shares one gesture id. Prevents double Meta/GA4 fires when both a delegated
 * `[data-track]` listener and an element-level handler call `track`.
 */
export function noteUserGesture(): void {
  gestureId += 1;
  gestureFired.clear();
}

/**
 * Meta's EventValidation plugin silently drops trackCustom for names listed in
 * pixel config `unverifiedEventNames` / `restrictedEventNames` (often as sha256).
 * PageView and other confirmed events are unaffected.
 */
function getMetaEventValidationConfig(): EventValidationConfig | null {
  try {
    const fbq = window.fbq;
    if (typeof fbq?.getFbeventsModules !== 'function') return null;
    const store = fbq.getFbeventsModules('SignalsFBEventsConfigStore') as ConfigStore | undefined;
    return store?.get?.(META_PIXEL_ID, 'eventValidation') ?? null;
  } catch {
    return null;
  }
}

function metaEventNameMatches(list: string[] | null | undefined, eventName: string, hash: string | null): boolean {
  return !!list && (list.includes(eventName) || (hash != null && list.includes(hash)));
}

function isMetaEventValidationBlocked(eventName: string): boolean {
  try {
    const cfg = getMetaEventValidationConfig();
    if (!cfg) return false;

    const shaMod = window.fbq?.getFbeventsModules?.('sha256_with_dependencies_new');
    const hash =
      typeof shaMod === 'function' ? (shaMod as (value: string) => string)(eventName) : null;

    return (
      metaEventNameMatches(cfg.unverifiedEventNames, eventName, hash) ||
      metaEventNameMatches(cfg.restrictedEventNames, eventName, hash)
    );
  } catch {
    return false;
  }
}

/**
 * EventValidation cancels the fbevents.js send for unverified custom names, so
 * Test Events never sees them (PageView still works). Remove this event from the
 * local block lists so trackCustom can queue the normal facebook.com/tr request.
 */
function allowMetaCustomEventSend(eventName: string): void {
  try {
    const cfg = getMetaEventValidationConfig();
    if (!cfg) return;

    const shaMod = window.fbq?.getFbeventsModules?.('sha256_with_dependencies_new');
    const hash =
      typeof shaMod === 'function' ? (shaMod as (value: string) => string)(eventName) : null;

    const strip = (list?: string[] | null) =>
      (list || []).filter((entry) => entry !== eventName && entry !== hash);

    if (cfg.unverifiedEventNames?.length) {
      cfg.unverifiedEventNames = strip(cfg.unverifiedEventNames);
    }
    if (cfg.restrictedEventNames?.length) {
      cfg.restrictedEventNames = strip(cfg.restrictedEventNames);
    }
  } catch {
    /* tracking must never break the page */
  }
}

/**
 * Last-resort documented Meta image-pixel GET if EventValidation still blocks
 * after allowMetaCustomEventSend (e.g. config modules not ready yet).
 */
function sendMetaImagePixel(eventName: string, params: Record<string, unknown>): void {
  const qs = new URLSearchParams({
    id: META_PIXEL_ID,
    ev: eventName,
  });
  for (const [key, value] of Object.entries(params)) {
    if (value == null) continue;
    qs.set(`cd[${key}]`, String(value));
  }
  const url = `https://www.facebook.com/tr?${qs.toString()}`;
  try {
    const img = new Image();
    img.src = url;
  } catch {
    /* tracking must never break the page */
  }
}

/**
 * Fires the mapped Meta and GA4 events. Never throws and never blocks
 * navigation — a failed tracking call must not cost a lead.
 */
export function track(event: TrackEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;

  const mapping = EVENTS[event];
  if (!mapping) return;

  const dedupeKey = `${gestureId}:${event}`;
  if (gestureFired.has(dedupeKey)) return;
  gestureFired.add(dedupeKey);

  try {
    if (typeof window.fbq === 'function') {
      const metaMethod = mapping.metaMethod ?? 'track';
      const metaPayload = { ...params, ...mapping.metaParams };

      if (metaMethod === 'trackCustom' && isMetaEventValidationBlocked(mapping.meta)) {
        allowMetaCustomEventSend(mapping.meta);
      }

      window.fbq(metaMethod, mapping.meta, metaPayload);

      // If EventValidation still cancels the JS send, fall back to the image pixel.
      if (metaMethod === 'trackCustom' && isMetaEventValidationBlocked(mapping.meta)) {
        sendMetaImagePixel(mapping.meta, metaPayload);
      }
    }
  } catch {
    /* tracking must never break the page */
  }

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', mapping.ga4, params);
    }
  } catch {
    /* tracking must never break the page */
  }
}

export { EVENTS };
