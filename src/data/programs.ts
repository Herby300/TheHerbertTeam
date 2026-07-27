import type { Testimonial } from './testimonials';

export type Program = {
  slug: string;
  name: string;
  href: string;
  icon: string;
  tagline: string;
  blurb: string;
  image: string;
  heroImage: string;
  seoTitle: string;
  seoDescription: string;
  heroHeading: string;
  intro: string;
  forWho: string[];
  benefits: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  glance: { label: string; value: string }[];
  myths: { myth: string; truth: string }[];
  faqs: { q: string; a: string }[];
  testimonial: Testimonial;
  related: string[];
};

export const programs: Program[] = [
  {
    slug: 'conventional',
    name: 'Conventional Loans',
    href: '/loan-programs/conventional',
    icon: 'home',
    tagline: 'Flexible down payments and strong terms for well-qualified buyers.',
    blurb:
      'The most common loan in America, and for good reason. Conventional financing rewards solid credit with competitive pricing, down payments starting at 3%, and mortgage insurance that goes away instead of following you for the life of the loan.',
    image: '/images/programs/conventional.webp',
    heroImage: '/images/programs/conventional.webp',
    seoTitle: 'Conventional Loans in Texas | 3% Down',
    seoDescription:
      'Conventional mortgage options in Georgetown and across Texas: as little as 3% down, mortgage insurance that drops at 20% equity, and credit-based pricing.',
    heroHeading: 'The Loan That Rewards You for Doing Things Right.',
    intro:
      'If you have built decent credit and have some cash saved, conventional financing is usually where the math works best. It is flexible enough to cover a 3%-down first home or a 25%-down second home, and unlike FHA, the mortgage insurance is temporary. The tradeoff is that guidelines are tighter, which is exactly why the structuring matters.',
    forWho: [
      'Buyers with credit scores around 680 and above who want the best available pricing',
      'First-time buyers who have 3% to 5% saved and want mortgage insurance that eventually disappears',
      'Move-up buyers rolling equity from a current home into the next one',
      'Anyone buying a second home or vacation property, which FHA and VA do not allow',
      'Borrowers who want to avoid the upfront funding fees attached to government loans',
    ],
    benefits: [
      {
        title: 'Mortgage insurance that ends',
        text: 'Conventional PMI cancels once you reach 20% equity, and drops automatically at 22%. On FHA, mortgage insurance generally sticks for the life of the loan unless you refinance. Over a 30-year horizon that difference is real money.',
      },
      {
        title: 'Down payments from 3%',
        text: 'Eligible first-time buyers can put down as little as 3%, and 5% opens the door for nearly everyone else. Gift funds from family are allowed, and down payment assistance can often be layered on top.',
      },
      {
        title: 'Pricing that follows your credit',
        text: 'Conventional pricing is risk-based, so a stronger credit profile and a larger down payment translate directly into better terms. If your score is close to a pricing tier, I will tell you exactly what it takes to cross it.',
      },
      {
        title: 'Widest property flexibility',
        text: 'Primary residences, second homes, investment property, condos, townhomes, and multi-unit properties are all in play. Government programs restrict most of those.',
      },
    ],
    steps: [
      {
        title: 'Strategy call and credit review',
        text: 'We look at your credit, income, and available cash together, and I tell you which loan type actually serves you best — including when conventional is not the answer.',
      },
      {
        title: 'Full preapproval, underwritten',
        text: 'I collect income and asset documentation and get your file reviewed so your preapproval means something to a listing agent. This usually takes 24 hours or less once documents are in.',
      },
      {
        title: 'Shop with real numbers',
        text: 'You get payment scenarios at several price points so you know what a house actually costs each month before you fall in love with it.',
      },
      {
        title: 'Contract to closing',
        text: 'Appraisal, underwriting, conditions, and clear-to-close. I manage the timeline and update you and your agent as it moves, typically closing in 21 to 30 days.',
      },
    ],
    glance: [
      { label: 'Minimum down payment', value: '3% for eligible first-time buyers, 5% standard' },
      { label: 'Typical credit score', value: '620 minimum, best pricing at 740+' },
      { label: 'Debt-to-income', value: 'Generally up to 45%, higher with strong compensating factors' },
      { label: '2025 conforming loan limit', value: '$806,500 for a one-unit property in most Texas counties' },
      { label: 'Mortgage insurance', value: 'Required under 20% down, cancellable at 20% equity' },
      { label: 'Occupancy allowed', value: 'Primary, second home, or investment property' },
    ],
    myths: [
      {
        myth: 'You need 20% down for a conventional loan.',
        truth: 'You do not. 20% avoids mortgage insurance, but 3% and 5% conventional loans are common. Waiting years to save 20% while prices and rents rise is often the more expensive choice — we can run that math side by side.',
      },
      {
        myth: 'Conventional is only for people with perfect credit.',
        truth: 'The floor is generally a 620 score. Pricing improves as your score rises, so the question is usually not whether you qualify but whether a small credit adjustment before applying would save you money.',
      },
      {
        myth: 'PMI is wasted money.',
        truth: 'PMI is the price of buying years earlier than you otherwise could, and it is temporary. Many clients cancel it within a few years through appreciation or extra principal payments.',
      },
    ],
    faqs: [
      {
        q: 'How much do I need for a conventional down payment in Texas?',
        a: 'As little as 3% if you are a qualifying first-time buyer, and 5% for most other purchases. Second homes typically start at 10% and investment properties at 15% to 20%. Gift funds from a family member are allowed on primary residences.',
      },
      {
        q: 'When does PMI come off a conventional loan?',
        a: 'You can request cancellation once your loan balance reaches 80% of the original value, and the servicer must remove it automatically at 78%. If your home has appreciated significantly, a new appraisal can sometimes get you there sooner.',
      },
      {
        q: 'What credit score do I need?',
        a: 'The general minimum is 620, but pricing tiers move at 660, 680, 700, 720, and 740. If you are sitting a few points below a tier, I will show you what it would take to get above it before we lock anything in.',
      },
      {
        q: 'Can I use a conventional loan for an investment property?',
        a: 'Yes. Conventional financing covers investment property with a larger down payment, generally 15% for one unit and more for multi-unit. If the numbers work better on rental income than on your tax returns, a DSCR loan may be the stronger option.',
      },
      {
        q: 'What is the conforming loan limit and what happens above it?',
        a: 'For 2025 the one-unit conforming limit is $806,500 in most Texas counties. Above that you are in jumbo territory, which has its own guidelines — and options that include 5% down and no monthly mortgage insurance for qualified borrowers.',
      },
    ],
    testimonial: {
      quote: 'Jason made the mortgage process incredibly easy and was always available to answer our questions.',
      author: 'Homebuyer',
      role: 'Austin, TX',
    },
    related: ['fha', 'jumbo', 'refinance'],
  },

  {
    slug: 'fha',
    name: 'FHA Loans',
    href: '/loan-programs/fha',
    icon: 'key-round',
    tagline: 'Lower down payment and more forgiving credit requirements.',
    blurb:
      'FHA exists so that a thin credit file, a past setback, or a smaller savings account does not lock you out of homeownership. 3.5% down, flexible guidelines, and gift funds allowed for the entire down payment.',
    image: '/images/programs/fha.webp',
    heroImage: '/images/programs/fha.webp',
    seoTitle: 'FHA Loans in Texas | 3.5% Down',
    seoDescription:
      'FHA mortgage options in Georgetown and across Texas. 3.5% down, credit-flexible guidelines, gift funds allowed, and guidance on when FHA beats conventional.',
    heroHeading: 'A Credit Score Should Not Be a Life Sentence.',
    intro:
      'FHA loans are insured by the federal government, which means lenders can say yes in situations where conventional guidelines say no. Lower credit, a higher debt load, a bankruptcy that has seasoned, a gift covering the entire down payment — all workable. The honest tradeoff is mortgage insurance that usually stays for the life of the loan, so I will always compare it against conventional before recommending it.',
    forWho: [
      'Buyers with credit scores in the 580 to 679 range',
      'Anyone whose down payment is coming entirely from a family gift',
      'Buyers carrying student loans or other debt that pushes debt-to-income above conventional limits',
      'Borrowers rebuilding after a bankruptcy, foreclosure, or short sale that has met the waiting period',
      'First-time buyers who want the lowest realistic barrier to entry right now',
    ],
    benefits: [
      {
        title: '3.5% down with a 580 score',
        text: 'On a $350,000 home that is $12,250 rather than the $70,000 a 20% conventional down payment would require. Scores between 500 and 579 can still work with 10% down.',
      },
      {
        title: 'Gift funds for 100% of the down payment',
        text: 'A parent, grandparent, or other eligible donor can gift the entire down payment and closing costs. We document it properly so it does not create an underwriting problem later.',
      },
      {
        title: 'Room for higher debt-to-income',
        text: 'FHA regularly approves debt-to-income ratios above what conventional allows when the rest of the file is strong. That flexibility is what gets student-loan-heavy buyers into homes.',
      },
      {
        title: 'Assumable if rates rise',
        text: 'FHA loans are assumable by a qualified buyer. If you lock a low rate and rates climb later, that becomes a real selling advantage when you list the home.',
      },
    ],
    steps: [
      {
        title: 'Credit and scenario review',
        text: 'We pull credit, look at what is on it, and identify anything worth addressing first. Sometimes a 30-day fix moves you into better terms — sometimes it does not matter at all, and I will tell you which.',
      },
      {
        title: 'Document your income and gift funds',
        text: 'W-2s, pay stubs, bank statements, and a properly executed gift letter with a paper trail. This is where FHA files fall apart at other lenders, so we do it correctly up front.',
      },
      {
        title: 'Underwritten preapproval',
        text: 'Your file is reviewed by an underwriter, not just run through a calculator. That is the difference between a preapproval a seller trusts and one they ignore.',
      },
      {
        title: 'Appraisal and closing',
        text: 'FHA appraisals include minimum property standards, so I flag likely repair items early with your agent rather than letting them surface a week before closing.',
      },
    ],
    glance: [
      { label: 'Minimum down payment', value: '3.5% with a 580+ score, 10% from 500–579' },
      { label: 'Typical credit score', value: '580 for the standard program' },
      { label: 'Debt-to-income', value: 'Often approved above 50% with strong compensating factors' },
      { label: '2025 FHA limit (most Texas counties)', value: '$524,225 for a one-unit property; higher in some metros' },
      { label: 'Mortgage insurance', value: 'Upfront premium plus annual MIP, generally for the life of the loan' },
      { label: 'Occupancy allowed', value: 'Primary residence only' },
    ],
    myths: [
      {
        myth: 'FHA loans are only for first-time buyers.',
        truth: 'Anyone buying a primary residence can use FHA. There is no first-time requirement — the program is about qualifying flexibility, not buyer status.',
      },
      {
        myth: 'Sellers will not accept FHA offers.',
        truth: 'Some listing agents are wary because of appraisal repair requirements. A strong, underwritten preapproval and a lender who answers the phone changes that conversation. I have had listing agents call me directly to confirm a file before their seller signed.',
      },
      {
        myth: 'FHA mortgage insurance means you are stuck forever.',
        truth: 'You are not stuck. Once you build equity and your credit improves, refinancing into a conventional loan removes it. Plenty of my clients use FHA as a two-to-five-year bridge into homeownership, then refinance.',
      },
    ],
    faqs: [
      {
        q: 'What credit score do I need for an FHA loan in Texas?',
        a: '580 gets you the 3.5% down program. Scores from 500 to 579 can qualify with 10% down, though fewer lenders offer it. Below 500, FHA is not available and we would work on a credit plan first.',
      },
      {
        q: 'Can my parents give me the down payment?',
        a: 'Yes. FHA permits 100% of the down payment and closing costs to come from an eligible gift. The donor signs a gift letter and we document the transfer with bank statements on both sides.',
      },
      {
        q: 'How long after a bankruptcy or foreclosure can I use FHA?',
        a: 'Generally two years after a Chapter 7 discharge and three years after a foreclosure or short sale, with re-established credit. Chapter 13 can sometimes work after twelve months of on-time plan payments with court approval.',
      },
      {
        q: 'Is FHA or conventional better for me?',
        a: 'It depends on your credit score and down payment. At higher scores, conventional usually wins because the mortgage insurance is cheaper and cancellable. Below roughly 680 with minimal down payment, FHA often costs less monthly. I run both side by side so you can see the actual numbers.',
      },
      {
        q: 'Can I refinance out of FHA later?',
        a: 'Yes, and many clients do. Once you have around 20% equity and a solid credit profile, a conventional refinance eliminates the mortgage insurance entirely. FHA also offers a streamline refinance that requires minimal documentation when rates drop.',
      },
    ],
    testimonial: {
      quote: 'Jason made the mortgage process incredibly easy and was always available to answer our questions.',
      author: 'First-Time Buyer',
      role: 'Round Rock, TX',
    },
    related: ['conventional', 'down-payment-assistance', 'first-time-homebuyers'],
  },

  {
    slug: 'va-loans',
    name: 'VA Loans',
    href: '/loan-programs/va-loans',
    icon: 'shield-check',
    tagline: 'Zero down and no monthly MI — let\u2019s use every benefit you earned.',
    blurb:
      'The VA loan is the strongest financing benefit in the country, and it is routinely underused because borrowers are told things about it that are not true. Zero down, no monthly mortgage insurance, reusable entitlement, and competitive pricing.',
    image: '/images/programs/va.webp',
    heroImage: '/images/programs/va.webp',
    seoTitle: 'VA Loans in Texas | Zero Down',
    seoDescription:
      'VA loan financing for Texas veterans and service members. Zero down, no monthly mortgage insurance, entitlement reuse, and funding fee exemptions explained.',
    heroHeading: 'You Earned It. Let\u2019s Make Sure You Actually Use It.',
    intro:
      'I have watched veterans put 20% down because someone told them a VA loan would slow the deal, and I have watched service members with full entitlement believe they could only use it once. Both are wrong. The VA loan has no down payment requirement, no monthly mortgage insurance, and entitlement that restores every time you sell or pay off. My job is to make sure you leave nothing on the table.',
    forWho: [
      'Veterans, active duty service members, National Guard, and Reservists who meet service requirements',
      'Surviving spouses eligible for VA benefits',
      'Veterans who have used a VA loan before and assume they cannot use it again',
      'Service members receiving VA disability compensation, who are exempt from the funding fee entirely',
      'Buyers who want to keep their savings in the bank rather than in a down payment',
    ],
    benefits: [
      {
        title: 'Zero down payment',
        text: 'Eligible borrowers with full entitlement can finance 100% of the purchase price with no down payment and no loan limit tied to entitlement. Your cash stays available for moving, furniture, or reserves.',
      },
      {
        title: 'No monthly mortgage insurance',
        text: 'This is the benefit people undervalue most. On a $400,000 loan, skipping mortgage insurance saves roughly $150 to $250 every month compared with a low-down-payment conventional loan.',
      },
      {
        title: 'Entitlement you can reuse',
        text: 'Full entitlement restores when you sell and pay off the loan. In some cases you can hold two VA loans at once using remaining entitlement — a strategy that works well for PCS moves and for keeping a first home as a rental.',
      },
      {
        title: 'Funding fee exemptions',
        text: 'Veterans receiving service-connected disability compensation are exempt from the VA funding fee. On a $400,000 loan that is over $9,000 in savings that many borrowers do not realize applies to them.',
      },
    ],
    steps: [
      {
        title: 'Pull your Certificate of Eligibility',
        text: 'I request your COE directly, which confirms your entitlement and whether you are exempt from the funding fee. It usually comes back the same day.',
      },
      {
        title: 'Confirm your entitlement math',
        text: 'If you have an existing VA loan or a prior claim, we calculate remaining entitlement and what it means for your down payment on this purchase. This is the step most lenders rush.',
      },
      {
        title: 'Underwritten preapproval',
        text: 'Residual income, not just debt-to-income, drives VA underwriting. I structure your file to the standard the VA actually uses so the approval holds up.',
      },
      {
        title: 'VA appraisal and closing',
        text: 'VA appraisals include minimum property requirements. I coordinate with your agent early so any repair conditions get handled without threatening your closing date.',
      },
    ],
    glance: [
      { label: 'Minimum down payment', value: '$0 with full entitlement' },
      { label: 'Typical credit score', value: 'No VA minimum; most lenders look for 580–620' },
      { label: 'Debt-to-income', value: 'Flexible — residual income can support ratios well above 41%' },
      { label: 'Loan limits', value: 'No limit with full entitlement; limits apply to partial entitlement' },
      { label: 'Mortgage insurance', value: 'None, ever' },
      { label: 'Funding fee', value: '1.25%–3.3% depending on use and down payment; waived with service-connected disability' },
    ],
    myths: [
      {
        myth: 'VA loans take longer to close.',
        truth: 'They do not, when handled by a lender who does them regularly. VA files close on the same 21-to-30-day timelines as conventional. The delay reputation comes from lenders who see one VA file a quarter.',
      },
      {
        myth: 'You can only use your VA benefit once.',
        truth: 'Entitlement is restored every time you sell and pay off a VA loan, and there is no limit on the number of times you can use it. You can even hold two VA loans simultaneously in certain situations.',
      },
      {
        myth: 'Sellers avoid VA offers.',
        truth: 'A clean, underwritten VA preapproval from a responsive lender competes just fine. What sellers actually care about is certainty of closing, and VA files backed by real underwriting deliver that.',
      },
    ],
    faqs: [
      {
        q: 'Do I really need zero down for a VA loan?',
        a: 'With full entitlement, yes — 100% financing with no down payment and no monthly mortgage insurance. Some borrowers choose to put money down to reduce the payment or the funding fee, but nothing requires it.',
      },
      {
        q: 'How do I know how much entitlement I have left?',
        a: 'Your Certificate of Eligibility shows it, and I pull that for you at no cost. If you have an active VA loan on another property, we calculate remaining entitlement and what down payment, if any, this purchase would need.',
      },
      {
        q: 'Am I exempt from the VA funding fee?',
        a: 'If you receive VA compensation for a service-connected disability, you are exempt. Surviving spouses receiving Dependency and Indemnity Compensation are also exempt. Your COE confirms it, and the savings can exceed $9,000 on a typical Texas purchase.',
      },
      {
        q: 'Can I use a VA loan for an investment property?',
        a: 'Not directly — VA requires you to occupy the property. But a common and completely legitimate strategy is buying a primary residence with VA, living in it, then converting it to a rental when you move and reusing or restoring entitlement for the next home. Multi-unit properties up to four units also work if you occupy one unit.',
      },
      {
        q: 'What credit score do I need for a VA loan in Texas?',
        a: 'The VA sets no minimum score. Most lenders want to see around 580 to 620, and I have programs that work at the lower end of that range. Residual income and payment history often matter more than the score itself.',
      },
    ],
    testimonial: {
      quote: 'The best mortgage experience we have ever had.',
      author: 'Veteran Homebuyer',
      role: 'Killeen, TX',
    },
    related: ['conventional', 'refinance', 'first-time-homebuyers'],
  },

  {
    slug: 'jumbo',
    name: 'Jumbo Loans',
    href: '/loan-programs/jumbo',
    icon: 'gem',
    tagline: 'Luxury financing with 5%-down and no-MI options available.',
    blurb:
      'Above the conforming limit, guidelines stop being standardized and start being negotiable. That is an advantage if your lender knows which investors will look at your file — 5% down, no mortgage insurance, and asset-based qualifying are all on the table.',
    image: '/images/programs/jumbo.webp',
    heroImage: '/images/programs/jumbo.webp',
    seoTitle: 'Jumbo Loans in Texas | 5% Down, No MI',
    seoDescription:
      'Jumbo financing across Texas for luxury and high-balance purchases. 5%-down jumbo, no-MI structures, asset depletion qualifying, and interest-only options.',
    heroHeading: 'High-Value Homes Deserve More Than a Cookie-Cutter Loan.',
    intro:
      'Jumbo loans are not government-backed, which means every investor writes their own guidelines. That is why one lender tells you 20% down is mandatory and another approves 5%. My value here is knowing which door to knock on for your specific profile — restricted stock, K-1 income, large asset balances, or a complex compensation structure.',
    forWho: [
      'Buyers purchasing above the 2025 conforming limit of $806,500 in most Texas counties',
      'Executives with bonus, RSU, or deferred compensation income that standard underwriting mishandles',
      'Physicians, attorneys, and business owners with strong assets and non-traditional income timing',
      'Buyers who have significant assets but want to keep them invested rather than liquidate for a down payment',
      'Relocating buyers moving into Austin, Georgetown, Lake Travis, and Hill Country luxury markets',
    ],
    benefits: [
      {
        title: 'Down payments starting at 5%',
        text: 'Qualified borrowers can access jumbo financing with 5% or 10% down instead of the 20% most people assume is required. On a $1.2 million purchase, that is hundreds of thousands of dollars that stay invested.',
      },
      {
        title: 'No monthly mortgage insurance',
        text: 'Several jumbo structures avoid mortgage insurance entirely even below 20% down, either through lender-paid structures or investor guidelines that simply do not require it.',
      },
      {
        title: 'Asset depletion qualifying',
        text: 'If your wealth is in accounts rather than a W-2, asset depletion converts your liquid holdings into qualifying income. Retired borrowers and buyers between ventures use this constantly.',
      },
      {
        title: 'Interest-only and portfolio flexibility',
        text: 'Interest-only periods, portfolio retention, and non-warrantable condo approvals are available in the jumbo space in ways they simply are not in conforming lending.',
      },
    ],
    steps: [
      {
        title: 'Profile and asset review',
        text: 'We map your full financial picture — income sources, equity compensation, liquid assets, and existing obligations — before touching an application, because that determines which investors fit.',
      },
      {
        title: 'Match the file to the right investor',
        text: 'Jumbo guidelines vary widely. I place your scenario with the lender whose guidelines match your strengths instead of forcing your file into a box that penalizes them.',
      },
      {
        title: 'Preapproval with documentation depth',
        text: 'Jumbo underwriting looks closely at reserves, so we assemble a complete asset picture up front. Strong jumbo preapprovals win competitive luxury listings.',
      },
      {
        title: 'Appraisal, review, and close',
        text: 'Higher loan amounts often require two appraisals or a desk review. I set that expectation on day one so the timeline is realistic and your contract dates are achievable.',
      },
    ],
    glance: [
      { label: 'Loan amount', value: 'Above $806,500 in most Texas counties, up to $3M+ depending on program' },
      { label: 'Minimum down payment', value: '5% for eligible borrowers, 10%–20% standard' },
      { label: 'Typical credit score', value: '700+, with the strongest pricing at 760+' },
      { label: 'Debt-to-income', value: 'Generally 43%, with exceptions for high reserves' },
      { label: 'Reserves', value: 'Typically 6–12 months of payments, varies by investor' },
      { label: 'Mortgage insurance', value: 'Avoidable on most structures, including some below 20% down' },
    ],
    myths: [
      {
        myth: 'Jumbo loans always require 20% down.',
        truth: 'That is the default assumption, not a rule. 5%- and 10%-down jumbo programs exist for borrowers with strong credit and reserves. The lender who told you otherwise simply did not have the program.',
      },
      {
        myth: 'Jumbo rates are always much higher.',
        truth: 'Jumbo pricing frequently lands close to conforming, and occasionally better, because these loans are held in portfolio by banks competing for high-value relationships.',
      },
      {
        myth: 'You need years of W-2 income to qualify.',
        truth: 'Asset depletion, bank statement, and P&L programs all exist in the jumbo space. What you need is documentable financial strength, not a specific pay structure.',
      },
    ],
    faqs: [
      {
        q: 'What is the jumbo loan threshold in Texas?',
        a: 'For 2025, any loan above $806,500 on a one-unit property is jumbo in most Texas counties. A handful of higher-cost counties nationwide have elevated limits, but the standard limit applies throughout the Austin and Georgetown area.',
      },
      {
        q: 'Can I really get a jumbo loan with 5% down?',
        a: 'Yes, for borrowers with strong credit, documented reserves, and a clean profile. The programs exist and I place them regularly. Eligibility varies by investor and is subject to full underwriting.',
      },
      {
        q: 'How does asset depletion qualifying work?',
        a: 'Rather than using employment income, the lender divides a portion of your qualified liquid assets over a set number of months to create a monthly income figure for underwriting. It is ideal for retirees, founders between liquidity events, and borrowers whose W-2 does not reflect their financial strength.',
      },
      {
        q: 'Do jumbo loans take longer to close?',
        a: 'Slightly, typically 30 to 40 days, mostly because of appraisal requirements on high-value properties. Setting realistic contract dates from the start is the way to avoid extension requests.',
      },
      {
        q: 'Can I use a jumbo loan for a second home in the Hill Country?',
        a: 'Yes. Jumbo financing covers primary residences, second homes, and in some cases investment properties. Down payment and reserve requirements step up for non-primary occupancy.',
      },
    ],
    testimonial: {
      quote: 'The best mortgage experience we have ever had.',
      author: 'Move-Up Buyer',
      role: 'Georgetown, TX',
    },
    related: ['conventional', 'self-employed', 'construction'],
  },

  {
    slug: 'construction',
    name: 'Construction Loans',
    href: '/loan-programs/construction',
    icon: 'hammer',
    tagline: 'Financing for custom builds and new construction.',
    blurb:
      'Building means coordinating a lender, a builder, a draw schedule, and a permanent loan at the same time. A one-time close wraps all of it into a single loan with a single set of closing costs and one rate lock.',
    image: '/images/programs/construction.webp',
    heroImage: '/images/programs/construction.webp',
    seoTitle: 'Texas Construction Loans | One-Time Close',
    seoDescription:
      'One-time close construction financing for custom homes in Georgetown, Austin, and across Texas. Single closing, managed draw schedule, and builder coordination.',
    heroHeading: 'Build the House. I\u2019ll Handle the Financing Timeline.',
    intro:
      'A construction loan is really two loans pretending to be one: the money that funds the build, and the mortgage that replaces it when the house is finished. A one-time close does exactly what the name says — you close once, lock once, and pay closing costs once. That removes the biggest risk in building, which is qualifying all over again at the end while rates have moved.',
    forWho: [
      'Buyers building a custom home on a lot they own or are purchasing',
      'Families who cannot find what they want in existing inventory around Georgetown and Williamson County',
      'Buyers working with a licensed builder on a new construction contract',
      'Owners planning a major renovation or teardown-rebuild on an existing property',
      'Anyone who wants their construction rate locked before the first shovel hits dirt',
    ],
    benefits: [
      {
        title: 'One closing, one set of costs',
        text: 'A one-time close combines the construction period and the permanent mortgage into a single transaction. You avoid paying title, appraisal, and lender fees twice, which commonly saves several thousand dollars.',
      },
      {
        title: 'Rate protection through the build',
        text: 'Your permanent financing terms are set at the original closing. If rates rise during a nine-month build, you are already locked. Extended lock and float-down options are available on some programs.',
      },
      {
        title: 'Interest-only during construction',
        text: 'You pay interest only on the funds actually drawn, not the full loan amount. Payments start small and step up as the house takes shape, which keeps cash flow manageable if you are also paying rent or an existing mortgage.',
      },
      {
        title: 'Managed draw schedule',
        text: 'I coordinate inspections and draw releases with your builder so trades get paid on schedule and the project does not stall waiting on funding.',
      },
    ],
    steps: [
      {
        title: 'Qualify the borrower and the project',
        text: 'Construction underwriting reviews you and the build. We look at your credit, income, and reserves alongside your lot, plans, budget, and builder credentials.',
      },
      {
        title: 'Builder review and appraisal',
        text: 'The builder submits licensing, insurance, and references. The appraiser values the home as-completed from your plans and specifications, which sets the loan amount.',
      },
      {
        title: 'Close once, then build',
        text: 'You close on the combined loan before construction begins. Lot payoff or purchase happens at that closing, and the construction reserve is set aside for draws.',
      },
      {
        title: 'Draws, inspection, and conversion',
        text: 'Funds release in stages as inspections confirm progress. When the certificate of occupancy is issued, the loan converts automatically to your permanent mortgage — no second application.',
      },
    ],
    glance: [
      { label: 'Minimum down payment', value: 'Typically 10%–20% of total project cost; lot equity often counts' },
      { label: 'Typical credit score', value: '700+ for most one-time close programs' },
      { label: 'Construction period', value: '6–12 months, extensions available' },
      { label: 'Payments during build', value: 'Interest-only on drawn funds' },
      { label: 'Permanent loan options', value: 'Conventional, VA, FHA, or jumbo depending on the amount' },
      { label: 'Closings required', value: 'One' },
    ],
    myths: [
      {
        myth: 'You need to pay cash for the lot first.',
        truth: 'Lot purchase can usually be rolled into the construction loan. If you already own the lot, its equity typically counts toward your down payment, sometimes covering it entirely.',
      },
      {
        myth: 'You have to requalify when the house is done.',
        truth: 'That is true of two-time close construction loans, and it is exactly the risk a one-time close eliminates. Your permanent terms are set at the original closing.',
      },
      {
        myth: 'Only wealthy buyers can build.',
        truth: 'Building is often competitive with buying existing inventory, particularly when you already own land. The real requirements are a credible builder, a realistic budget, and enough contingency for change orders.',
      },
    ],
    faqs: [
      {
        q: 'What is a one-time close construction loan?',
        a: 'It is a single loan that funds construction and then converts into your permanent mortgage when the home is complete. You close once, lock your permanent rate once, and pay one set of closing costs instead of two.',
      },
      {
        q: 'How do construction draws work?',
        a: 'Funds release in stages tied to completed work — foundation, framing, mechanical, drywall, finish-out. An inspector verifies each stage before the draw is released to your builder. I manage that coordination so the schedule holds.',
      },
      {
        q: 'What are my payments during construction?',
        a: 'Interest-only on the amount actually drawn. Early in the build that is a small payment, and it grows as more of the loan funds. Full principal and interest begins when the loan converts to permanent financing.',
      },
      {
        q: 'Can I use a VA loan to build?',
        a: 'Yes, VA one-time close construction financing exists, though fewer lenders offer it and builder requirements are stricter. If you are a veteran planning to build, that conversation should happen before you sign a builder contract.',
      },
      {
        q: 'What happens if the build goes over budget?',
        a: 'We build a contingency into the loan amount at the outset, typically 5% to 10%. Change orders beyond that generally come out of pocket, which is why an accurate initial budget from your builder matters so much.',
      },
    ],
    testimonial: {
      quote: 'The best mortgage experience we have ever had.',
      author: 'Custom Home Client',
      role: 'Liberty Hill, TX',
    },
    related: ['jumbo', 'conventional', 'refinance'],
  },

  {
    slug: 'investor-dscr',
    name: 'Investor & DSCR',
    href: '/loan-programs/investor-dscr',
    icon: 'trending-up',
    tagline: 'Qualify on rental income and scale your portfolio.',
    blurb:
      'DSCR loans qualify the property, not you. No tax returns, no debt-to-income calculation, no cap on how many properties you own — just whether the rent covers the payment.',
    image: '/images/programs/investor-dscr.webp',
    heroImage: '/images/programs/investor-dscr.webp',
    seoTitle: 'DSCR Loans in Texas | Investor Mortgages',
    seoDescription:
      'DSCR and investment property financing across Texas. Qualify on rental income instead of tax returns, vest in an LLC, and scale past financed-property limits.',
    heroHeading: 'Your Tenants Qualify for the Loan.',
    intro:
      'Conventional financing caps you at ten financed properties and punishes you for the write-offs that make real estate worth owning. DSCR lending looks at one question: does the rent cover the payment? If the ratio works, the loan works — regardless of what your Schedule E says or how many doors you already own.',
    forWho: [
      'Investors who have hit conventional financing limits and need to keep buying',
      'Buyers whose tax returns show low income because of depreciation and legitimate write-offs',
      'Investors who want to vest title in an LLC for liability and estate planning reasons',
      'Short-term rental owners using projected or documented platform income',
      'Out-of-state and international investors buying into the Texas rental market',
    ],
    benefits: [
      {
        title: 'No tax returns, no personal DTI',
        text: 'Qualification is based on the debt service coverage ratio: gross rent divided by principal, interest, taxes, insurance, and HOA. Your personal income never enters the calculation.',
      },
      {
        title: 'LLC vesting available',
        text: 'Title and the loan can be held in the name of your LLC, which conventional financing generally does not allow. That keeps your liability structure and your financing structure aligned.',
      },
      {
        title: 'No limit on financed properties',
        text: 'Conventional guidelines stop at ten financed properties. DSCR lenders do not impose that cap, which is what makes portfolio scaling possible past the first handful of doors.',
      },
      {
        title: 'Fast, document-light closings',
        text: 'Without tax returns and employment verification, the file is dramatically simpler. DSCR purchases regularly close in under 30 days, which matters when you are competing for a deal.',
      },
    ],
    steps: [
      {
        title: 'Run the DSCR on your target property',
        text: 'We take market rent or an existing lease and divide it by the full monthly payment. A ratio of 1.0 means rent equals the payment; most programs want 1.0 to 1.25, and some allow below 1.0 with a larger down payment.',
      },
      {
        title: 'Structure the vesting and entity',
        text: 'If you are buying in an LLC, we confirm the operating agreement and organizational documents up front so title does not scramble at closing.',
      },
      {
        title: 'Credit, reserves, and terms',
        text: 'Credit score and reserves drive pricing and down payment. We confirm those and lock terms based on your target ratio and hold period.',
      },
      {
        title: 'Appraisal with rent schedule and close',
        text: 'The appraiser completes a market rent analysis alongside the valuation. That rent figure finalizes your DSCR, and we close — often in three to four weeks.',
      },
    ],
    glance: [
      { label: 'Minimum down payment', value: 'Typically 20%–25%' },
      { label: 'Typical credit score', value: '660 minimum; best pricing at 720+' },
      { label: 'DSCR required', value: '1.0–1.25 standard; sub-1.0 options with more down' },
      { label: 'Income documentation', value: 'None — no tax returns, no W-2, no DTI' },
      { label: 'Vesting', value: 'Individual or LLC' },
      { label: 'Property types', value: '1–4 units, condos, and some short-term rentals' },
    ],
    myths: [
      {
        myth: 'DSCR loans have terrible rates.',
        truth: 'They price above conventional investment property loans, but the gap is narrower than most investors expect — and it is often outweighed by not being capped at ten properties or forced to show income you legitimately wrote off.',
      },
      {
        myth: 'You need a signed lease to qualify.',
        truth: 'A lease helps, but the appraiser\u2019s market rent analysis can establish the income on a vacant property. That is how investors buy, renovate, and lease afterward.',
      },
      {
        myth: 'DSCR is only for experienced investors.',
        truth: 'Many programs accept first-time investors, though a few price better with documented experience. If this is your first rental, it is still a viable path.',
      },
    ],
    faqs: [
      {
        q: 'How is DSCR calculated?',
        a: 'Gross monthly rent divided by the total monthly payment including principal, interest, taxes, insurance, and HOA dues. If rent is $2,400 and the payment is $2,000, your DSCR is 1.20. Most programs want 1.0 or better, and stronger ratios improve pricing.',
      },
      {
        q: 'Can I close in the name of my LLC?',
        a: 'Yes. DSCR loans routinely allow LLC vesting, which is one of the main reasons investors choose them over conventional financing. We just need your operating agreement, EIN, and certificate of formation.',
      },
      {
        q: 'Do DSCR loans work for short-term rentals?',
        a: 'Some programs allow it using documented platform revenue or a market short-term rent analysis. Guidelines vary by lender and by city ordinance, so we confirm both before you go under contract.',
      },
      {
        q: 'How many DSCR loans can I have?',
        a: 'There is generally no cap on the number of financed properties, though individual lenders set exposure limits on how much they will lend to one borrower. Investors regularly build portfolios well past the conventional ten-property ceiling this way.',
      },
      {
        q: 'What if the property does not cash flow yet?',
        a: 'Some programs go below a 1.0 ratio with a larger down payment or higher reserves. We can also look at a shorter-term bridge while you stabilize the property, then refinance into permanent DSCR financing once rents support it.',
      },
    ],
    testimonial: {
      quote: 'We thought we could not qualify because we were self-employed. Jason found a solution and got us into our dream home.',
      author: 'Real Estate Investor',
      role: 'Austin, TX',
    },
    related: ['self-employed', 'conventional', 'refinance'],
  },

  {
    slug: 'self-employed',
    name: 'Self-Employed Programs',
    href: '/loan-programs/self-employed',
    icon: 'briefcase',
    tagline: 'Bank statement, 1099, P&L, and no-ratio loans for business owners.',
    blurb:
      'You did not do anything wrong. Your accountant did their job, your tax return shows a modest net income, and a lender who only knows one way to read income told you no. There are four other ways to read it.',
    image: '/images/programs/self-employed.webp',
    heroImage: '/images/programs/self-employed.webp',
    seoTitle: 'Bank Statement Loans in Texas',
    seoDescription:
      'Self-employed mortgage options in Texas: bank statement loans, 1099 loans, P&L-only programs, and no-ratio financing for business owners with write-offs.',
    heroHeading: 'Your Tax Return Is Not Your Income Statement.',
    intro:
      'This is the work I am known for. A business owner nets $60,000 on paper after equipment, mileage, home office, and depreciation, while $30,000 a month moves through the business account. Conventional underwriting sees the $60,000. Bank statement, 1099, P&L, and no-ratio programs see the rest of the picture. If someone has already told you no, that conversation is usually the beginning, not the end.',
    forWho: [
      'Business owners with two or more years of self-employment and significant write-offs',
      '1099 contractors, consultants, and commission-only earners',
      'Real estate agents, insurance brokers, and other variable-income professionals',
      'Gig economy and multi-stream earners whose income does not fit one W-2 box',
      'Anyone who was denied elsewhere specifically because of how their tax returns look',
    ],
    benefits: [
      {
        title: 'Bank statement qualifying',
        text: 'We use 12 or 24 months of business or personal bank deposits to establish income, applying an expense factor rather than your tax write-offs. For most business owners this produces a qualifying income two to four times higher than their return shows.',
      },
      {
        title: '1099 income programs',
        text: 'Contractors can qualify using gross 1099 income with a reasonable expense factor instead of net Schedule C income. One or two years of 1099s can be enough documentation.',
      },
      {
        title: 'P&L-only options',
        text: 'A profit and loss statement prepared by your CPA or licensed tax preparer, sometimes with limited bank statements for support, can carry the file. This is the lightest documentation path available.',
      },
      {
        title: 'No-ratio and asset-based loans',
        text: 'When income documentation is genuinely impractical, no-ratio programs qualify on credit, down payment, and reserves without calculating income at all. Asset depletion is another route for borrowers with substantial holdings.',
      },
    ],
    steps: [
      {
        title: 'Diagnose the income, do not just document it',
        text: 'We start with how your business actually operates — deposit patterns, entity structure, ownership percentage, distributions. That determines which of the four programs produces the strongest qualifying income for you.',
      },
      {
        title: 'Choose the program that maximizes qualifying income',
        text: 'The same borrower can qualify for very different loan amounts depending on the program. I run your income under multiple methods and show you the comparison before we commit.',
      },
      {
        title: 'Assemble clean documentation',
        text: 'Bank statements, a business license or CPA letter confirming self-employment, and entity documents. Because these files are underwritten by hand, presentation matters — sloppy documentation causes preventable denials.',
      },
      {
        title: 'Underwrite, appraise, and close',
        text: 'Non-QM files receive manual underwriting from someone who reads them, rather than an automated engine. Typical closings run 21 to 35 days.',
      },
    ],
    glance: [
      { label: 'Minimum down payment', value: 'Typically 10%–20% depending on program and credit' },
      { label: 'Typical credit score', value: '620–680 minimum depending on program' },
      { label: 'Income documentation', value: '12–24 months bank statements, 1099s, CPA P&L, or none' },
      { label: 'Self-employment history', value: 'Generally 2 years; 1 year possible in some cases' },
      { label: 'Debt-to-income', value: 'Usually up to 50%; not calculated at all on no-ratio programs' },
      { label: 'Occupancy allowed', value: 'Primary, second home, or investment property' },
    ],
    myths: [
      {
        myth: 'Self-employed borrowers need two years of tax returns.',
        truth: 'For conventional loans, generally yes. For the programs above, no. Bank statement and P&L loans exist specifically because tax returns are a poor measure of a business owner\u2019s ability to repay.',
      },
      {
        myth: 'These are the risky loans that caused 2008.',
        truth: 'They are not. Today\u2019s non-QM loans require documented income through an alternative method, verified assets, real down payments, and full ability-to-repay analysis. What disappeared after 2008 was undocumented lending, not alternative documentation.',
      },
      {
        myth: 'You should amend your tax returns to show more income.',
        truth: 'Please do not do this without talking to me and your CPA first. Amending returns to inflate income creates tax liability and underwriting scrutiny, and it is almost never necessary once you use the right program.',
      },
    ],
    faqs: [
      {
        q: 'How does a bank statement loan calculate my income?',
        a: 'We total deposits over 12 or 24 months, remove transfers and non-business deposits, then apply an expense factor — often 50% for business accounts, or a CPA-provided figure. What remains, divided by the number of months, is your qualifying income.',
      },
      {
        q: 'How long do I need to be self-employed?',
        a: 'Two years is standard. Some programs accept one year of self-employment when there is related prior experience in the same field, which helps professionals who recently left a W-2 job to do the same work independently.',
      },
      {
        q: 'Are the rates much higher on self-employed programs?',
        a: 'They price above conventional because they carry more underwriting risk. The comparison that matters is not this loan versus a conventional loan you cannot get — it is this loan versus continuing to rent. Many clients refinance into conventional financing two or three years later once their returns support it.',
      },
      {
        q: 'Can I use personal bank statements instead of business ones?',
        a: 'Yes. Personal statements often use a smaller expense factor or none at all, since the money has already been distributed to you. If you pay yourself regularly from the business, personal statements frequently produce the better result.',
      },
      {
        q: 'I was denied by another lender. Is my file dead?',
        a: 'Usually not. Most denials I see are program mismatches, not borrower problems. Send me the denial reasons and the last two years of business bank statements, and I will tell you within a day whether there is a path.',
      },
    ],
    testimonial: {
      quote: 'We thought we could not qualify because we were self-employed. Jason found a solution and got us into our dream home.',
      author: 'Self-Employed Buyer',
      role: 'Business Owner',
    },
    related: ['investor-dscr', 'jumbo', 'conventional'],
  },

  {
    slug: 'refinance',
    name: 'Refinance',
    href: '/loan-programs/refinance',
    icon: 'refresh-cw',
    tagline: 'Rate-and-term, cash-out, and no-lender-fee options.',
    blurb:
      'Refinancing is only worth doing when the math says so. I will show you the break-even, the total interest cost, and what happens if you stay five years versus thirty — then tell you honestly whether to move.',
    image: '/images/programs/refinance.webp',
    heroImage: '/images/programs/refinance.webp',
    seoTitle: 'Mortgage Refinance in Texas | Cash-Out',
    seoDescription:
      'Refinance your Texas mortgage with honest break-even math. Rate-and-term, cash-out, debt consolidation, and no-lender-fee options explained before you commit.',
    heroHeading: 'Refinance Because the Math Works, Not Because Someone Called You.',
    intro:
      'Half the refinance calls homeowners get are from people paid to originate a loan, not to advise. My standard is simple: if the break-even is longer than you plan to stay in the house, I will tell you not to do it. When it does make sense — dropping mortgage insurance, consolidating high-interest debt, pulling equity for a renovation, or shortening your term — it can be one of the highest-return financial moves available to you.',
    forWho: [
      'Homeowners with rates meaningfully above current market pricing',
      'FHA borrowers with 20% equity who want to eliminate mortgage insurance permanently',
      'Anyone carrying high-interest credit card or personal loan debt against significant home equity',
      'Homeowners funding a renovation, tuition, or business capital need through a cash-out refinance',
      'Borrowers who want to shorten a 30-year term to 15 or 20 years and cut total interest',
    ],
    benefits: [
      {
        title: 'Transparent break-even analysis',
        text: 'Total closing costs divided by monthly savings gives you the month you break even. If that is 32 months and you are moving in two years, the refinance loses money — and I will say so.',
      },
      {
        title: 'Cash-out for debt consolidation',
        text: 'Texas allows cash-out refinancing up to 80% of the home\u2019s value under Section 50(a)(6) rules. Rolling 22% credit card debt into a mortgage rate often changes a household budget immediately.',
      },
      {
        title: 'Eliminate FHA mortgage insurance',
        text: 'FHA mortgage insurance generally lasts the life of the loan. Refinancing to conventional at 20% equity removes it, which for many homeowners saves more than the rate change itself.',
      },
      {
        title: 'No-lender-fee options',
        text: 'On qualifying refinances I can structure the loan with no lender fees, funded through pricing. It changes the break-even math substantially and is worth modeling both ways.',
      },
    ],
    steps: [
      {
        title: 'Define the goal first',
        text: 'Lower payment, shorter term, cash out, or drop mortgage insurance — these lead to different loans. We start with what you actually want to accomplish.',
      },
      {
        title: 'Run the real numbers',
        text: 'I model your current loan against the proposed one: payment, break-even, total interest, and where you stand in five and ten years. You see the comparison, not just a rate.',
      },
      {
        title: 'Application and appraisal',
        text: 'Documentation is lighter than a purchase since there is no contract or closing timeline pressure. Some refinances qualify for an appraisal waiver, which saves both time and money.',
      },
      {
        title: 'Close on your schedule',
        text: 'Refinances typically close in 21 to 30 days. Texas primary residences carry a three-day right of rescission after closing before funds disburse.',
      },
    ],
    glance: [
      { label: 'Rate-and-term max LTV', value: 'Up to 97% conventional, higher with FHA and VA streamlines' },
      { label: 'Texas cash-out max LTV', value: '80% of appraised value on a primary residence' },
      { label: 'Typical credit score', value: '620 minimum; 740+ for best pricing' },
      { label: 'Typical closing timeline', value: '21–30 days' },
      { label: 'Right of rescission', value: '3 business days on primary residences' },
      { label: 'Lender fees', value: 'No-lender-fee structures available on qualifying loans' },
    ],
    myths: [
      {
        myth: 'You should refinance any time rates drop half a point.',
        truth: 'The half-point rule ignores your loan size and closing costs. On a small balance, half a point may never break even. On a large one, a quarter point can pay for itself in under two years. Run the actual math.',
      },
      {
        myth: 'Refinancing restarts your 30-year clock, so it is always bad.',
        truth: 'It resets amortization, which is why I show total interest cost rather than just the monthly payment. You can also refinance into a shorter term or keep making your old payment amount on the new loan to stay on your original payoff schedule.',
      },
      {
        myth: 'Cash-out refinancing is risky.',
        truth: 'Converting unsecured debt to secured debt is a real tradeoff and deserves a serious conversation. But at reasonable loan-to-value with a stable payment and a plan not to run the cards back up, it is a legitimate financial tool.',
      },
    ],
    faqs: [
      {
        q: 'How do I know if refinancing is worth it?',
        a: 'Divide your total closing costs by your monthly savings. That is your break-even in months. If you plan to keep the home well past that point, the refinance makes sense. I run this for anyone who asks, with no obligation.',
      },
      {
        q: 'How much equity do I need for a cash-out refinance in Texas?',
        a: 'Texas limits cash-out refinances on a primary residence to 80% of the appraised value, so you need to retain at least 20% equity after the new loan. Texas also has specific 50(a)(6) rules and timing requirements that I walk clients through.',
      },
      {
        q: 'Can I refinance to remove mortgage insurance?',
        a: 'Yes, and for FHA borrowers this is often the single biggest reason to refinance. Once you hold 20% equity, moving to conventional financing removes the mortgage insurance permanently, even if your interest rate stays roughly the same.',
      },
      {
        q: 'What is a no-lender-fee refinance?',
        a: 'The lender fees are covered through the pricing of the loan rather than charged at closing. Your rate may be marginally higher, but your out-of-pocket cost drops sharply, which shortens the break-even. I model it both ways so you can choose.',
      },
      {
        q: 'Will refinancing hurt my credit?',
        a: 'There is a small, temporary dip from the credit inquiry and the new account. Multiple mortgage inquiries within a 45-day window count as one. Most borrowers see scores recover within a few months of on-time payments.',
      },
    ],
    testimonial: {
      quote: 'The best mortgage experience we have ever had.',
      author: 'Refinance Client',
      role: 'Cedar Park, TX',
    },
    related: ['conventional', 'atm-mortgage', 'va-loans'],
  },
];

export const programsBySlug: Record<string, Program> = Object.fromEntries(
  programs.map((program) => [program.slug, program])
);

export function getProgram(slug: string): Program {
  const program = programsBySlug[slug];
  if (!program) throw new Error(`Unknown loan program: ${slug}`);
  return program;
}
