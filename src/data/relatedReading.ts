/**
 * Blog posts surfaced on each program / solution page under "Related Reading".
 * Keys are program or solution slugs; values are blog post slugs (max 3 shown).
 * Gives every post a link from a high-authority page so Google crawls it sooner.
 */
export const relatedReading: Record<string, string[]> = {
  // Loan programs
  conventional: ['can-i-remove-mortgage-insurance-without-refinancing', 'should-you-buy-points', 'can-i-use-gift-money-for-down-payment'],
  fha: ['can-i-buy-a-house-with-student-loans', 'can-my-parent-help-me-qualify-for-a-mortgage', 'does-mortgage-preapproval-hurt-credit'],
  'va-loans': ['va-entitlement-explained', 'how-much-money-do-i-really-need-to-buy-a-house', 'what-does-clear-to-close-mean'],
  jumbo: ['how-much-house-should-i-buy', 'seller-credits-vs-price-reduction', 'should-i-pay-points-to-lower-mortgage-rate'],
  construction: ['what-happens-if-home-appraisal-comes-in-low', 'what-does-clear-to-close-mean', 'how-much-money-left-after-buying-house'],
  'investor-dscr': ['dscr-loans-101', 'austin-market-update', 'should-i-wait-for-mortgage-rates-to-drop'],
  'self-employed': ['bank-statement-loans-explained', 'how-long-at-job-to-qualify-for-mortgage', 'preapproved-mortgage-mistakes-before-closing'],
  refinance: ['why-did-my-fixed-rate-mortgage-payment-go-up', 'can-i-remove-mortgage-insurance-without-refinancing', 'should-i-pay-points-to-lower-mortgage-rate'],
  // Solutions
  'first-time-homebuyers': ['first-time-buyer-mistakes', 'how-much-money-do-i-really-need-to-buy-a-house', 'preapproved-mortgage-mistakes-before-closing'],
  'down-payment-assistance': ['can-i-use-gift-money-for-down-payment', 'how-much-money-left-after-buying-house', 'seller-credits-vs-price-reduction'],
  'buy-before-you-sell': ['buy-before-you-sell', 'what-happens-if-home-appraisal-comes-in-low', 'how-much-house-should-i-buy'],
};
