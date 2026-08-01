export const site = {
  name: 'The Herbert Team',
  advisor: 'Jason Herbert',
  tagline: 'More Than a Mortgage. A Mortgage Solution.',
  positioning: 'The Mortgage Solution Expert',
  url: 'https://www.theherbertteam.com',

  email: 'jason@theherbertteam.com',
  emailHref: 'mailto:jason@theherbertteam.com',
  phone: '(760) 715-3434',
  phoneHref: 'tel:+17607153434',

  city: 'Georgetown',
  state: 'TX',
  address: 'Georgetown, Texas',

  nmls: 'NMLS #633039',
  nmlsId: '633039',
  nmlsLookup: 'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/633039',

  institution: 'Primis Mortgage Company',
  institutionNmls: 'NMLS #1894879',
  institutionNmlsId: '1894879',
  institutionNmlsLookup: 'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1894879',

  applyUrl: 'https://mortgageapp.primisbank.com/homehub/signup/jason.herbert@primisbank.com',
  calendlyUrl: 'https://link.pivotpointcrm.com/widget/booking/AzjHQG9X5fuGMWZhROT7',

  social: {
    youtube:   'https://www.youtube.com/@jasonherbert-YMSE',
    facebook:  'https://www.facebook.com/mortgagesolutionexpert/',
    instagram: 'https://www.instagram.com/mortgagesolutionexpert',
    tiktok:    'https://www.tiktok.com/@mortgagesolutionexpert',
    linkedin:  'https://www.linkedin.com/in/jason-herbert-3871187/',
  },
  socialHandle: '@mortgagesolutionexpert',

  analytics: {
    metaPixel: '497875464066153',
    ga4: 'G-BG0E3R8MG8',
    ga4PropertyId: '227191460',
    gtm: '', // not in use
  },

  // Common Ninja Google Reviews widget
  googleReviewsWidgetId: 'fb5ecfcb-806d-4364-988d-97e1cbb83543',
} as const;

// Pivot Point (GHL) form IDs
export const formIds = {
  contact:          'sBP5YbCcAUi9XgLwfjgc',
  realtor:          'LLXntLqMfWRwciDFbS6Z',
  financialAdvisor: 'RZ3es9vh27Zi3qN9emCW',
  divorceAttorney:  'uCv1pcJrjwy0KKbDSCe9',
  builder:          '2uJ2SMjGvTxAgYyNC8lH',
  guideDownload:    'LpEmlm38sw2fBqswY4ey',
  newsletter:       'a0WXAMTAItL8S1oFpkv1',
} as const;

export const formBase = 'https://link.pivotpointcrm.com/widget/form/';
export const bookingUrl = site.calendlyUrl;

/** Business hours, shown on /contact and in the footer. */
export const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM CT' },
  { day: 'Saturday', time: 'By appointment' },
  { day: 'Sunday', time: 'Closed' },
] as const;

/** Non-empty social profile URLs, used to build the JSON-LD sameAs array. */
export const socialProfiles: string[] = Object.values<string>(site.social).filter((url) => url.length > 0);
