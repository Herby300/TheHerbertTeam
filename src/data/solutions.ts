import type { Program } from './programs';

export type Solution = Program;

export const solutions: Solution[] = [
  {
    slug: 'atm-mortgage',
    name: 'ATM Mortgage',
    href: '/solutions/atm-mortgage',
    icon: 'banknote',
    tagline: 'A first-lien HELOC — your equity, accessible on demand.',
    blurb:
      'Replace your traditional mortgage with a first-lien home equity line of credit. Your income sits in the account and reduces the balance interest is calculated on, and you can draw it back out whenever you need it.',
    image: '/images/solutions/atm-mortgage.webp',
    heroImage: '/images/solutions/atm-mortgage.webp',
    seoTitle: 'ATM Mortgage | First-Lien HELOC in Texas',
    seoDescription:
      'The ATM Mortgage is a first-lien HELOC that turns your home equity into an on-demand line of credit. How the sweep works, who it fits, and the honest risks.',
    heroHeading: 'Your Equity. On Demand.',
    intro:
      'A traditional mortgage is a one-way street: you send money in and you cannot get it back without refinancing or opening a second lien. A first-lien HELOC replaces that mortgage entirely with a revolving line of credit secured in first position. Your paycheck goes into the account and immediately lowers the balance that interest is charged on. When you need the money, you draw it back out. This is a powerful tool for the right borrower and a poor fit for the wrong one, so this page includes both sides.',
    forWho: [
      'Homeowners with strong, consistent cash flow and a healthy monthly surplus',
      'Self-employed borrowers and business owners with lumpy income who value access to liquidity',
      'Disciplined households that carry a cash cushion in savings anyway',
      'Real estate investors who want a flexible source of down payment capital between deals',
      'Homeowners with substantial equity who want it accessible without a second lien or a refinance',
    ],
    benefits: [
      {
        title: 'Interest calculated on the daily balance',
        text: 'Because your deposits reduce the balance the day they land, every dollar sitting in the account is working against your interest cost until you spend it. Idle cash effectively earns your mortgage rate, tax considerations aside.',
      },
      {
        title: 'Liquidity without a second loan',
        text: 'Need cash for a renovation, a business opportunity, tuition, or an emergency? You draw from the line. No new application, no closing costs, no second lien behind your mortgage.',
      },
      {
        title: 'Potential for faster payoff',
        text: 'Households with a real monthly surplus often shorten their effective payoff timeline substantially, because the surplus reduces the interest-bearing balance continuously rather than once a month.',
      },
      {
        title: 'One account, one lien',
        text: 'This replaces your first mortgage rather than sitting behind it. There is no juggling a mortgage payment and a HELOC payment, and no subordination issues if you refinance later.',
      },
    ],
    steps: [
      {
        title: 'Establish the line in first position',
        text: 'We pay off your existing mortgage with a HELOC secured in first lien position. Your credit limit is set based on your home value, credit profile, and income.',
      },
      {
        title: 'Direct deposit your income into the account',
        text: 'Your paycheck or business distributions land in the account. The balance drops by that amount immediately, and interest for that day is calculated on the lower number.',
      },
      {
        title: 'Pay expenses out of the line',
        text: 'Living expenses are paid from the same account throughout the month. The balance rises as you spend, but your money spent days reducing interest before it left.',
      },
      {
        title: 'Keep the surplus working',
        text: 'Whatever you do not spend stays applied against the balance instead of sitting in a low-yield checking account. That surplus is the entire engine of the strategy.',
      },
    ],
    glance: [
      { label: 'Lien position', value: 'First lien — replaces your existing mortgage' },
      { label: 'Structure', value: 'Revolving line of credit with a draw period' },
      { label: 'Rate type', value: 'Variable, typically tied to an index plus a margin' },
      { label: 'Typical credit score', value: '700+' },
      { label: 'Typical max combined LTV', value: 'Up to 80%–90% depending on program' },
      { label: 'Best fit', value: 'Disciplined borrowers with consistent monthly surplus' },
    ],
    myths: [
      {
        myth: 'It is a gimmick that pays off your house in seven years automatically.',
        truth: 'Nothing here is automatic. The acceleration comes from your monthly surplus, not from the account structure. If you have no surplus, this will not shorten your payoff — and I will tell you that in the first conversation.',
      },
      {
        myth: 'It is the same as a regular HELOC.',
        truth: 'A standard HELOC sits in second position behind your mortgage. This replaces the mortgage in first position, which is what makes the deposit-sweep mechanic work and generally results in better pricing.',
      },
      {
        myth: 'A variable rate makes it too risky for anyone.',
        truth: 'The variable rate is a genuine risk and deserves a real conversation. What makes it manageable for the right borrower is the ability to keep a large balance paid down and the option to convert or refinance if rates move against you.',
      },
    ],
    faqs: [
      {
        q: 'What exactly is a first-lien HELOC?',
        a: 'It is a home equity line of credit that occupies first lien position on your property because it paid off and replaced your previous mortgage. You get the flexibility of a line of credit with the pricing and priority of a first mortgage.',
      },
      {
        q: 'How does putting my paycheck in actually save interest?',
        a: 'Interest on the line accrues on the average daily balance. A $9,000 deposit on the first of the month reduces the interest-bearing balance for every day it stays there. Over a year, a household with meaningful surplus and disciplined spending sees a real reduction in total interest paid.',
      },
      {
        q: 'What are the honest risks?',
        a: 'Three main ones. The rate is variable, so payments can rise if the index does. It requires discipline — if you treat the line as spending money, the balance grows instead of shrinking. And the line has a draw period, after which it converts to a repayment schedule. Those are the reasons this product is not right for everyone.',
      },
      {
        q: 'Who should not use this?',
        a: 'Households living paycheck to paycheck with no monthly surplus, borrowers who would be stressed by a rate increase, and anyone who finds an open line of credit hard to leave alone. For those situations a fixed-rate mortgage is the better and safer answer.',
      },
      {
        q: 'Can I switch back to a traditional mortgage later?',
        a: 'Yes. You can refinance into a conventional fixed-rate mortgage at any time, subject to qualification and any prepayment terms in your specific agreement. Some clients use the line for a defined period, then convert.',
      },
    ],
    testimonial: {
      quote: 'The best mortgage experience we have ever had.',
      author: 'ATM Mortgage Client',
      role: 'Georgetown, TX',
    },
    related: ['refinance', 'self-employed', 'investor-dscr'],
  },

  {
    slug: 'buy-before-you-sell',
    name: 'Buy Before You Sell',
    href: '/solutions/buy-before-you-sell',
    icon: 'arrow-up-right',
    tagline: 'Make a non-contingent offer without selling first.',
    blurb:
      'The classic move-up trap: you cannot buy until you sell, and you cannot sell until you know where you are going. Buy Before You Sell breaks the loop by letting you make a strong, non-contingent offer on the next house first.',
    image: '/images/solutions/buy-before-you-sell.webp',
    heroImage: '/images/solutions/buy-before-you-sell.webp',
    seoTitle: 'Buy Before You Sell in Texas',
    seoDescription:
      'Buy your next home before selling your current one. Make a non-contingent offer, move on your schedule, and sell without pressure. Costs and eligibility.',
    heroHeading: 'Make a Non-Contingent Offer Without Selling First.',
    intro:
      'A home sale contingency is the weakest thing you can attach to an offer. When a seller compares your contingent offer against a clean one at the same price, yours loses — every time. Buy Before You Sell removes the contingency, so you shop with the strength of a cash-like buyer, move once, and sell your current home empty and staged instead of scrambling.',
    forWho: [
      'Move-up buyers with substantial equity in a home they need to sell',
      'Families who cannot manage a double move or a temporary rental with kids and pets',
      'Buyers relocating into Texas on a compressed timeline',
      'Anyone competing in a market where contingent offers are routinely passed over',
      'Downsizers who want to secure the right smaller home before listing the family house',
    ],
    benefits: [
      {
        title: 'Your offer competes on equal footing',
        text: 'Listing agents rank offers by certainty. Removing the sale contingency moves you from the bottom of the pile to the top, often without raising your price.',
      },
      {
        title: 'Move once, not twice',
        text: 'You close on the new home, move in, then list and sell. No interim rental, no storage unit, no two moves in ninety days.',
      },
      {
        title: 'Sell from a position of strength',
        text: 'An empty, staged, professionally photographed home shows better and negotiates better than one you are living in while fielding showing requests. Sellers who are not under pressure make better decisions.',
      },
      {
        title: 'Your equity unlocked early',
        text: 'The program lets you access the equity in your current home for the down payment on the new one before that home has actually sold.',
      },
    ],
    steps: [
      {
        title: 'Evaluate both properties',
        text: 'We look at your current home\u2019s value and mortgage balance alongside your target purchase price to confirm the equity math works and determine your program options.',
      },
      {
        title: 'Get your approval and offer strength in place',
        text: 'You receive an underwritten approval that lets your agent write a non-contingent offer. Your agent can show the listing side documentation that supports your certainty of closing.',
      },
      {
        title: 'Close on the new home and move',
        text: 'You purchase and take possession of the new home. Your current home\u2019s equity is bridged so the down payment does not require you to have sold first.',
      },
      {
        title: 'List, sell, and settle up',
        text: 'With your family already moved, the old home hits the market empty. When it sells, the bridged amount is repaid from the proceeds and the transaction closes out.',
      },
    ],
    glance: [
      { label: 'Contingency required', value: 'None — offers are written without a home sale contingency' },
      { label: 'Equity needed in current home', value: 'Typically 25%–30% or more' },
      { label: 'Typical credit score', value: '680+' },
      { label: 'Bridge period', value: 'Usually up to 6 months' },
      { label: 'Cost structure', value: 'Program fee plus short-term carrying cost; disclosed in writing up front' },
      { label: 'Moves required', value: 'One' },
    ],
    myths: [
      {
        myth: 'You have to qualify for both mortgage payments.',
        truth: 'Depending on program structure, the departing residence payment may be excluded or offset, which is exactly what makes this work for households that could not carry both on paper.',
      },
      {
        myth: 'It is only for wealthy buyers.',
        truth: 'What it requires is equity, not a large income. Homeowners who bought five or more years ago in Central Texas frequently have more than enough.',
      },
      {
        myth: 'It costs so much that it wipes out the benefit.',
        truth: 'There is a real cost and I disclose it in writing before you commit. Weigh it against what you lose by making a contingent offer that gets rejected, or by selling first and paying rent plus two moves.',
      },
    ],
    faqs: [
      {
        q: 'How much equity do I need in my current home?',
        a: 'Generally 25% to 30% or more, though it depends on both property values and the specific program. The fastest way to find out is a ten-minute call where we look at your balance and an honest estimate of your home\u2019s value.',
      },
      {
        q: 'What if my current home does not sell quickly?',
        a: 'Programs include a defined bridge period, typically up to six months. We talk through the contingency plan and the carrying cost before you commit, so a slow sale is an inconvenience rather than a crisis.',
      },
      {
        q: 'What does it cost?',
        a: 'There is a program fee and short-term carrying cost that varies by structure and by how long the bridge stays outstanding. You get the numbers in writing before you make an offer — no surprises at closing.',
      },
      {
        q: 'Is this the same as a bridge loan?',
        a: 'It is a modern version of the same idea, with less friction. Traditional bridge loans often required qualifying for both payments and carried heavy costs. These programs are structured specifically around removing the sale contingency.',
      },
      {
        q: 'How fast can this come together?',
        a: 'Approval typically moves at the same pace as a standard preapproval — often within a couple of days once documents are in. The right time to start is before you tour homes, not after you have found the one.',
      },
    ],
    testimonial: {
      quote: 'The best mortgage experience we have ever had.',
      author: 'Move-Up Buyer',
      role: 'Georgetown, TX',
    },
    related: ['conventional', 'jumbo', 'refinance'],
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
