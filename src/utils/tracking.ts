/**
 * Single tracking entry point. Components call `track(...)` and never touch
 * fbq or gtag directly, which keeps consent gating a one-file change later.
 */

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
};

const EVENTS: Record<TrackEvent, EventMap> = {
  form_submit: { meta: 'Lead', ga4: 'generate_lead' },
  schedule: { meta: 'Schedule', ga4: 'schedule_consultation' },
  phone_click: { meta: 'Contact', ga4: 'phone_click' },
  email_click: { meta: 'Contact', ga4: 'email_click' },
  begin_application: { meta: 'SubmitApplication', ga4: 'begin_application' },
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

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    herbertTrack?: (event: TrackEvent, params?: Record<string, unknown>) => void;
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

  try {
    if (typeof window.fbq === 'function') {
      window.fbq('track', mapping.meta, params);
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
