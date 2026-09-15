import type { Program } from './programs';

export type Solution = Program;

export const solutions: Solution[] = [
  {
    slug: 'buy-before-you-sell',
    name: 'Buy Now. Sell Later.',
    href: '/solutions/buy-before-you-sell',
    icon: 'arrow-up-right',
    tagline: 'Two options to help coordinate your next purchase and current home sale.',
    blurb:
      'Ready for your next home, but still need to sell? Compare Planet Home Lending’s Purchase EDGE and Purchase EDGE Guarantee with me so we can build a move around your budget and timeline.',
    image: '/images/solutions/buy-before-you-sell.webp',
    heroImage: '/images/solutions/buy-before-you-sell.webp',
    seoTitle: 'Buy Now. Sell Later. | Purchase EDGE',
    seoDescription:
      'Compare Planet Purchase EDGE and Purchase EDGE Guarantee: fees, sale timelines, backup purchase terms, and Texas and California availability.',
    heroHeading: 'Your Next Home. A Plan for the One You Own.',
    intro:
      'Buying and selling at the same time creates a lot of moving parts. Planet offers two different ways to coordinate those transactions through Planet Management Group (PMG), a Planet subsidiary. One involves selling your current home to PMG before your next closing; the other provides a backup buyer while you market the home. I’ll help you compare the costs, expected proceeds, and obligations before you choose.',
    forWho: [
      'Homeowners planning a move who need a coordinated purchase and sale',
      'Buyers who want to evaluate an offer without a home-sale contingency',
      'Families comparing a direct sale with listing their current home',
      'Texas homeowners in eligible metropolitan areas',
      'California homeowners exploring Purchase EDGE Guarantee, subject to location and program approval',
    ],
    benefits: [
      { title: 'Make an offer without waiting for a sale', text: 'Purchase EDGE Guarantee supports an offer without a home-sale contingency through a backup buyer. That can give a seller more certainty about your sale timeline, although your financing still needs approval and the seller decides which offer to accept.' },
      { title: 'Reduce the disruption of moving', text: 'Coordinating your sale and purchase can help avoid an interim rental, storage, and a second move. We’ll confirm closing and possession dates so you know when you can leave one home and enter the next.' },
      { title: 'Choose convenience or market exposure', text: 'With Purchase EDGE, PMG purchases your home and handles its listing, reducing the need to prepare for showings while living there. With Guarantee, you and your chosen agent market the home, with a defined backup purchase if it remains unsold.' },
      { title: 'Keep an opportunity for additional proceeds', text: 'If you sell through the Guarantee option, you retain the extra profit, subject to your transaction costs. Purchase EDGE provides 75% of extra resale profit after fees and costs. We’ll compare estimated net proceeds, not just the headline sale price.' },
    ],
    steps: [
      { title: 'Review your scenario', text: 'Send me your current address, approximate mortgage balance, target purchase, and timeline. We’ll check property, location, and financing eligibility.' },
      { title: 'Compare the written terms', text: 'Review the valuation, purchase terms, fees, closing costs, and estimated proceeds for the available option. Ask questions before signing.' },
      { title: 'Coordinate the purchase and move', text: 'Your selected program determines when your current home changes hands. We’ll coordinate that schedule with your agent and new mortgage approval.' },
      { title: 'Follow the sale requirements', text: 'For the Guarantee option, your listing deadline and backup purchase terms matter. Keep the agreed milestones in view with your agent.' },
    ],
    glance: [
      { label: 'Program options', value: 'Purchase EDGE / Purchase EDGE Guarantee' },
      { label: 'Texas', value: 'Eligible metropolitan areas; approval required' },
      { label: 'California', value: 'Guarantee option only; eligible areas and approval required' },
      { label: 'Credit and equity', value: 'Individual review; no minimum published on the corporate page' },
      { label: 'Program expiration', value: 'December 31, 2026, unless changed or terminated earlier' },
    ],
    myths: [
      { myth: 'A backup buyer means I receive full market value.', truth: 'Read the backup purchase price carefully. It can materially change your proceeds compared with a sale to a buyer on the open market.' },
      { myth: 'An offer without a sale contingency is guaranteed to win.', truth: 'The seller still decides which offer to accept. Price, financing, inspections, and closing terms all matter.' },
      { myth: 'The program fee is my entire cost.', truth: 'Review the complete transaction estimate, including applicable inspections, closing and selling costs, and ongoing home expenses.' },
    ],
    faqs: [
      { q: 'Which option should I consider?', a: 'Start with your priorities: convenience, expected proceeds, timing, and comfort with marketing the home. I’ll compare the available written offers with you.' },
      { q: 'Can I choose my real estate agent?', a: 'Planet permits you to choose your agent. With the Guarantee option, coordinate the required listing timeline; with Purchase EDGE, PMG handles the listing after purchasing.' },
      { q: 'Is this a bridge loan?', a: 'These options involve a purchase or backup purchase by PMG. Ask for a separate financing comparison if you are also considering borrowing against your equity.' },
      { q: 'Do I automatically qualify?', a: 'No. Your property, location, financing, and program terms require review. The corporate page does not establish a universal credit score, equity minimum, or approval turnaround.' },
      { q: 'What should I send you to get started?', a: 'Your current home address, approximate mortgage balance, desired purchase price, and expected move date are a useful starting point. We can discuss documents through the application process.' },
    ],
    testimonial: {
      quote: 'The best mortgage experience we have ever had.',
      author: 'Move-Up Buyer',
      role: 'Georgetown, TX',
    },
    related: ['conventional', 'refinance'],
  },

  {
    slug: 'down-payment-assistance',
    name: 'Down Payment Assistance',
    href: '/solutions/down-payment-assistance',
    icon: 'wallet',
    tagline: 'Programs that shrink the cash you need to close.',
    blurb:
      'Texas has grant and second-lien programs that can cover most or all of a down payment, and many buyers who qualify never hear about them because the lender they called does not offer them.',
    image: '/images/solutions/down-payment-assistance.webp',
    heroImage: '/images/solutions/down-payment-assistance.webp',
    seoTitle: 'Down Payment Assistance in Texas | TSAHC',
    seoDescription:
      'Texas down payment assistance explained: TSAHC and TDHCA grants, forgivable second liens, city programs, income limits, and stacking with FHA or conventional.',
    heroHeading: 'The Down Payment Is Smaller Than You Think.',
    intro:
      'The single most common reason people delay buying is the belief that they need 20% down. In Texas, between statewide programs through TSAHC and TDHCA, city and county programs, and lender-funded assistance, a meaningful share of buyers can get into a home with a fraction of that — sometimes with almost nothing out of pocket beyond earnest money and inspections.',
    forWho: [
      'First-time buyers, defined by most programs as not having owned a home in the past three years',
      'Teachers, first responders, veterans, and healthcare workers, who often qualify for dedicated programs',
      'Households earning at or below the program income limits for their county',
      'Repeat buyers in designated target areas, where the first-time requirement is frequently waived',
      'Buyers who have solid income and credit but have not accumulated a large down payment',
    ],
    benefits: [
      {
        title: 'Grants that never have to be repaid',
        text: 'TSAHC offers grant assistance typically calculated as a percentage of the loan amount. A grant is not a loan — there is no lien, no payment, and no repayment obligation.',
      },
      {
        title: 'Forgivable second liens',
        text: 'Some programs provide a second lien at 0% interest with no monthly payment that is forgiven entirely after you occupy the home for a set period, commonly three years.',
      },
      {
        title: 'Deferred and repayable seconds',
        text: 'Other structures defer repayment until you sell or refinance. These often carry larger assistance amounts, which can be the right trade if you plan to stay in the home long term.',
      },
      {
        title: 'Assistance stacks with your main loan',
        text: 'Down payment assistance layers on top of FHA, conventional, VA, or USDA financing. You are not choosing between a good loan and assistance — you are combining them.',
      },
    ],
    steps: [
      {
        title: 'Check income and purchase price limits',
        text: 'Nearly every program has a household income cap and a maximum purchase price that vary by county. Williamson and Travis County limits differ, so we check your specific target area first.',
      },
      {
        title: 'Match the program to your loan',
        text: 'Some assistance pairs best with FHA, some with conventional. We compare the total monthly cost of each combination rather than just the assistance amount.',
      },
      {
        title: 'Complete required homebuyer education',
        text: 'Most programs require a certified homebuyer education course. It is typically online, takes a few hours, and genuinely helps first-time buyers. I send you the approved provider list.',
      },
      {
        title: 'Reserve the funds and close',
        text: 'Assistance is reserved when you go under contract, so timing matters. Funds arrive at closing and are applied to your down payment and eligible closing costs.',
      },
    ],
    glance: [
      { label: 'Typical assistance amount', value: '3%–5% of the loan amount, higher on some programs' },
      { label: 'Statewide Texas programs', value: 'TSAHC Homes for Texas Heroes and Home Sweet Texas; TDHCA My First Texas Home' },
      { label: 'Local programs', value: 'City and county programs available in parts of the Austin metro' },
      { label: 'First-time requirement', value: 'Common, but waived in target areas and for veterans on many programs' },
      { label: 'Income limits', value: 'Set by county and household size' },
      { label: 'Education required', value: 'Yes, certified homebuyer education course on most programs' },
    ],
    myths: [
      {
        myth: 'Down payment assistance is only for very low incomes.',
        truth: 'Income limits are often well above the local median — many two-income households qualify. Assuming you earn too much without checking is the most common way buyers miss out.',
      },
      {
        myth: 'You have to be a first-time buyer.',
        truth: 'Frequently, but not always. Target-area purchases and veteran-focused programs commonly waive it, and the standard definition is simply not having owned in three years.',
      },
      {
        myth: 'Sellers will not accept offers using assistance.',
        truth: 'A well-documented offer with a lender who knows the program closes on the same timeline as any other. Problems come from lenders unfamiliar with the reservation and funding process.',
      },
    ],
    faqs: [
      {
        q: 'What down payment assistance is available in Texas?',
        a: 'Statewide, TSAHC runs Homes for Texas Heroes and Home Sweet Texas, and TDHCA runs My First Texas Home along with a mortgage credit certificate program. Several Austin-metro cities and counties operate their own programs, and some lender-funded assistance exists as well. Program terms and funding availability change, so we verify current details before you rely on any of it.',
      },
      {
        q: 'Do I have to pay the assistance back?',
        a: 'It depends on the structure. Grants are never repaid. Forgivable seconds are erased after an occupancy period, commonly three years. Deferred seconds are repaid when you sell or refinance. I tell you exactly which one you are getting before you sign.',
      },
      {
        q: 'What are the income limits?',
        a: 'They vary by county and household size and are updated periodically. In much of the Austin metro the limits are higher than most people expect. Send me your household income and target county and I will check the current figures.',
      },
      {
        q: 'Can I combine assistance with an FHA loan?',
        a: 'Yes. FHA plus down payment assistance is one of the most common combinations, because FHA already has a low 3.5% requirement and assistance can cover most or all of it.',
      },
      {
        q: 'Is it worth it if the rate is slightly higher?',
        a: 'Sometimes yes, sometimes no. Assistance programs occasionally carry a marginally higher rate in exchange for the funds. If the assistance is what makes buying possible now rather than in three years, it usually wins. I run both scenarios so you can see the difference.',
      },
    ],
    testimonial: {
      quote: 'Jason made the mortgage process incredibly easy and was always available to answer our questions.',
      author: 'First-Time Buyer',
      role: 'Hutto, TX',
    },
    related: ['fha', 'first-time-homebuyers', 'conventional'],
  },

  {
    slug: 'first-time-homebuyers',
    name: 'First-Time Homebuyers',
    href: '/solutions/first-time-homebuyers',
    icon: 'graduation-cap',
    tagline: 'Education, budgeting, and offer strategy from preapproval to keys.',
    blurb:
      'Buying your first home is mostly an information problem. Once you know what the numbers are, what the steps are, and what each one costs, the fear drops away and it becomes a project you can manage.',
    image: '/images/solutions/first-time-homebuyers.webp',
    heroImage: '/images/solutions/first-time-homebuyers.webp',
    seoTitle: 'First Time Home Buyer Programs in Texas',
    seoDescription:
      'A first-time homebuyer guide for Texas: how much cash you really need, the seven-step process, down payment assistance, and the fears that keep buyers renting.',
    heroHeading: 'Your First Home, Without the Guesswork.',
    intro:
      'Nobody teaches this. You are expected to make the largest financial decision of your life using advice from a coworker and a rate you saw in an ad. My approach with first-time buyers is education first: we talk through your budget, your credit, your timeline, and your options before anyone fills out an application. There is no pressure to buy right now — if the right answer is to wait six months and fix two things, I will say so.',
    forWho: [
      'Renters who suspect they could buy but are not sure where to start',
      'Buyers who have not owned a home in the past three years, which most programs still count as first-time',
      'Young families who need to know their real numbers before touring homes',
      'Buyers worried their credit or student loans disqualify them',
      'Anyone who wants the process explained without being sold to',
    ],
    benefits: [
      {
        title: 'You get real numbers before you shop',
        text: 'Payment, cash to close, and the price range that actually fits your life rather than the maximum a computer will approve. Those are two very different numbers and confusing them is how people end up house poor.',
      },
      {
        title: 'Access to assistance programs',
        text: 'Texas grant and second-lien programs can cover much of the down payment for eligible buyers. We check what you qualify for as part of the first conversation, not as an afterthought.',
      },
      {
        title: 'A preapproval sellers take seriously',
        text: 'Fully underwritten, not a computer-generated letter. In a market with multiple offers, the strength of your preapproval is often the difference between getting the house and getting a call from your agent.',
      },
      {
        title: 'A guide through every step',
        text: 'Inspection, appraisal, option period, underwriting conditions, closing disclosure. You get an explanation of each one before it happens, so nothing surprises you.',
      },
    ],
    steps: [
      {
        title: 'Set the budget',
        text: 'We start with what you are comfortable paying each month and work backward to a price range, including taxes, insurance, HOA dues, and mortgage insurance. Texas property taxes are high, and ignoring them is the most common first-time budgeting mistake.',
      },
      {
        title: 'Get preapproved',
        text: 'Credit, income, and asset documentation are reviewed and underwritten. You get a letter your agent can send with an offer, plus a clear picture of your cash to close.',
      },
      {
        title: 'Shop with your agent',
        text: 'You tour homes knowing exactly what each price point costs monthly. I am available for real-time payment scenarios while you are standing in a driveway deciding.',
      },
      {
        title: 'Make the offer',
        text: 'Your agent structures the offer, and I call the listing agent to back up your preapproval. That call has won plenty of contracts for my clients.',
      },
      {
        title: 'Inspect and negotiate',
        text: 'During the Texas option period you inspect the home and can negotiate repairs or walk away. This is your protection window — use all of it.',
      },
      {
        title: 'Underwriting and appraisal',
        text: 'The lender verifies everything and the appraiser confirms value. Underwriting conditions are normal, not a sign of trouble. I chase them so you are not scrambling.',
      },
      {
        title: 'Close and get your keys',
        text: 'You review the Closing Disclosure at least three business days ahead, sign at the title company, and the home is yours.',
      },
    ],
    glance: [
      { label: 'Minimum down payment', value: 'As low as 0% (VA/USDA), 3% conventional, 3.5% FHA' },
      { label: 'First-time definition', value: 'Generally no ownership interest in a primary residence for 3 years' },
      { label: 'Typical credit score', value: '580 for FHA, 620 for conventional' },
      { label: 'Cash needed beyond down payment', value: 'Earnest money, option fee, inspection, appraisal, closing costs' },
      { label: 'Typical preapproval time', value: 'Same day to 24 hours' },
      { label: 'Typical closing timeline', value: '21–30 days from contract' },
    ],
    myths: [
      {
        myth: 'You need 20% down.',
        truth: 'The median first-time buyer down payment is nowhere near 20%. Between 3% conventional, 3.5% FHA, zero-down VA and USDA, and down payment assistance, most first-time buyers put down far less.',
      },
      {
        myth: 'Student loans mean you cannot buy.',
        truth: 'Student loan payments count in your debt-to-income ratio, but they do not disqualify you. There are specific calculation rules for income-driven and deferred payments that often help more than borrowers expect.',
      },
      {
        myth: 'You should wait for rates to drop.',
        truth: 'Nobody can time that, and lower rates typically bring more buyers and higher prices. The better question is whether the payment fits your budget today. If rates fall later, you refinance.',
      },
    ],
    faqs: [
      {
        q: 'How much money do I really need to buy my first home in Texas?',
        a: 'Beyond the down payment, budget for earnest money (often 1% of the price, credited back at closing), an option fee of a few hundred dollars, an inspection around $400 to $600, an appraisal of $500 to $700, and closing costs of roughly 2% to 3%. Some of that can be covered by seller concessions or assistance programs.',
      },
      {
        q: 'What credit score do I need to buy my first home?',
        a: '580 opens FHA at 3.5% down and 620 opens conventional. If you are below that, we build a specific plan — usually a few targeted moves that raise a score within 30 to 60 days.',
      },
      {
        q: 'How long does the process take from start to keys?',
        a: 'Preapproval is same-day to 24 hours. House hunting varies. Once you are under contract, 21 to 30 days is typical in Texas. Most first-time buyers go from first call to closing in about 45 to 60 days.',
      },
      {
        q: 'What is the option period in Texas?',
        a: 'A negotiated window, commonly seven to ten days, during which you pay a small fee for the unrestricted right to terminate the contract for any reason. It is when your inspection happens, and it is the strongest buyer protection in the Texas contract.',
      },
      {
        q: 'Should I get preapproved before I start looking at houses?',
        a: 'Absolutely. Touring homes without knowing your numbers wastes your time and risks falling for something out of reach. It also means that when you find the right house, your offer goes out the same day instead of a week later.',
      },
    ],
    testimonial: {
      quote: 'Jason made the mortgage process incredibly easy and was always available to answer our questions.',
      author: 'Homebuyer',
      role: 'Austin, TX',
    },
    related: ['fha', 'down-payment-assistance', 'conventional'],
  },
];

export const solutionsBySlug: Record<string, Solution> = Object.fromEntries(
  solutions.map((solution) => [solution.slug, solution])
);

export function getSolution(slug: string): Solution {
  const solution = solutionsBySlug[slug];
  if (!solution) throw new Error(`Unknown solution: ${slug}`);
  return solution;
}
