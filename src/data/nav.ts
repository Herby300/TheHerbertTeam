import { site } from './site';

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const loanProgramLinks: NavChild[] = [
  { label: 'Conventional Loans', href: '/loan-programs/conventional', description: 'Flexible terms for well-qualified buyers' },
  { label: 'FHA Loans', href: '/loan-programs/fha', description: '3.5% down with forgiving credit guidelines' },
  { label: 'VA Loans', href: '/loan-programs/va-loans', description: 'Zero down, no monthly mortgage insurance' },
  { label: 'Jumbo Loans', href: '/loan-programs/jumbo', description: 'Luxury financing above conforming limits' },
  { label: 'Construction Loans', href: '/loan-programs/construction', description: 'Build custom with a one-time close' },
  { label: 'Investor & DSCR', href: '/loan-programs/investor-dscr', description: 'Qualify on rent, not your W-2' },
  { label: 'Self-Employed Programs', href: '/loan-programs/self-employed', description: 'Bank statement, 1099, P&L, no-ratio' },
  { label: 'Refinance', href: '/loan-programs/refinance', description: 'Rate-and-term, cash-out, no lender fee' },
];

export const solutionLinks: NavChild[] = [
  { label: 'Buy Now. Sell Later.', href: '/solutions/buy-before-you-sell', description: 'Make a non-contingent offer' },
  { label: 'Down Payment Assistance', href: '/solutions/down-payment-assistance', description: 'Shrink the cash you need to close' },
  { label: 'First-Time Homebuyers', href: '/solutions/first-time-homebuyers', description: 'From preapproval to keys, guided' },
];

export const resourceLinks: NavChild[] = [
  { label: 'Free Guides', href: '/resources', description: 'Downloadable homebuying playbooks' },
  { label: 'Mortgage Calculator', href: '/resources/calculator', description: 'Run your real monthly numbers' },
  { label: 'Blog', href: '/blog', description: 'Plain-English mortgage education' },
  { label: 'FAQ', href: '/faq', description: 'Every question I get asked, answered' },
  { label: 'Partners', href: '/partners', description: 'For realtors, advisors, attorneys, builders' },
];

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Loan Programs', href: '/loan-programs', children: loanProgramLinks },
  { label: 'Solutions', href: '/solutions', children: solutionLinks },
  { label: 'Resources', href: '/resources', children: resourceLinks },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

export const footerLegalLinks: NavChild[] = [
  { label: 'Privacy Policy', href: 'https://www.planethomelending.com/privacy-policy' },
  { label: 'Terms of Use', href: 'https://www.planethomelending.com/terms-of-use' },
  { label: 'Licensing & Disclosures', href: 'https://www.planethomelending.com/licensing' },
];

export const footerCompanyLinks: NavChild[] = [
  { label: 'About Jason', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
  { label: 'Apply Now', href: site.applyUrl },
  { label: 'Schedule a Call', href: '/schedule' },
];
