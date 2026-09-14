export type FaqCategory =
  | 'Getting Started'
  | 'Credit & Qualifying'
  | 'Down Payment'
  | 'Self-Employed'
  | 'VA & Military'
  | 'Investment Property'
  | 'Refinancing'
  | 'Closing';

export type Faq = {
  q: string;
  a: string;
  category: FaqCategory;
  /** Shown in the homepage accordion and its FAQPage schema. */
  homepage: boolean;
  /** Display order within the homepage accordion. */
  homepageOrder?: number;
};

export const faqCategories: FaqCategory[] = [
  'Getting Started',
  'Credit & Qualifying',
  'Down Payment',
  'Self-Employed',
  'VA & Military',
  'Investment Property',
  'Refinancing',
  'Closing',
];

export const faqs: Faq[] = [
  // ---------------------------------------------------------------- Getting Started
  {
    category: 'Getting Started',
    homepage: true,
    homepageOrder: 1,
    q: 'How much do I actually need for a down payment?',
    a: 'Less than most people think. VA and USDA can be zero down, FHA is 3.5%, conventional starts at 3%, and even jumbo has 5%-down options. Down payment assistance can reduce it further. The real answer depends on your loan type and goals — that\u2019s a 10-minute conversation.',
  },
  {
    category: 'Getting Started',
    homepage: true,
    homepageOrder: 4,
    q: 'How long does the whole process take?',
    a: 'Preapproval is typically same-day to 24 hours. Full closing is generally 21–30 days once you\u2019re under contract, and I\u2019ve closed faster when a deal required it.',
  },
  {
    category: 'Getting Started',
    homepage: true,
    homepageOrder: 6,
    q: 'What\u2019s the difference between preapproval and prequalification?',
    a: 'Prequalification is an estimate. Preapproval means your documents have been reviewed and underwritten, which is what makes your offer credible to a seller. I do the real one.',
  },
  {
    category: 'Getting Started',
    homepage: true,
    homepageOrder: 7,
    q: 'Do you only work in Texas?',
    a: 'Texas is home base, but I\u2019m licensed to serve clients across the country. Relocations are a regular part of what I do.',
  },
  {
    category: 'Getting Started',
    homepage: true,
    homepageOrder: 8,
    q: 'What does working with you cost me?',
    a: 'The consultation is free with no obligation. Loan costs are disclosed in writing and explained line by line before you commit to anything. No surprises — that\u2019s the entire point.',
  },
  {
    category: 'Getting Started',
    homepage: false,
    q: 'What documents do I need to get started?',
    a: 'For most W-2 borrowers: two recent pay stubs, two years of W-2s, two months of bank statements, and a photo ID. Self-employed borrowers should add two years of tax returns or 12 to 24 months of business bank statements, depending on which program we use. I send a personalized list after our first call so you are not gathering paperwork you do not need.',
  },
  {
    category: 'Getting Started',
    homepage: false,
    q: 'Should I talk to a lender or a real estate agent first?',
    a: 'A lender. Good agents will ask for a preapproval before showing homes anyway, and knowing your budget shapes which neighborhoods and price points make sense. If you need an agent, I can introduce you to several I trust in the Georgetown and Austin area.',
  },
  {
    category: 'Getting Started',
    homepage: false,
    q: 'How long is a preapproval good for?',
    a: 'Typically 90 days, since credit reports and income documents age out. Refreshing it is quick — usually an updated pay stub and bank statement. I proactively update my clients\u2019 letters so nothing expires mid-search.',
  },
  {
    category: 'Getting Started',
    homepage: false,
    q: 'Can I get preapproved before I know where I want to buy?',
    a: 'Yes, and you should. Preapproval is based on you, not on a specific property. Knowing your number first is what keeps house hunting productive instead of frustrating.',
  },
  {
    category: 'Getting Started',
    homepage: false,
    q: 'What makes you different from an online lender?',
    a: 'You get one advisor from application through closing, not a call center queue and a different name in every email. When your file has a wrinkle — and most interesting files do — there is a person who knows your situation and can restructure it. I originate through Planet Home Lending.',
  },

  // ---------------------------------------------------------------- Credit & Qualifying
  {
    category: 'Credit & Qualifying',
    homepage: true,
    homepageOrder: 3,
    q: 'Will applying hurt my credit score?',
    a: 'A preapproval pull is a soft-touch process for most clients, and mortgage inquiries within a 45-day window count as a single inquiry. The impact is minimal and temporary.',
  },
  {
    category: 'Credit & Qualifying',
    homepage: false,
    q: 'What credit score do I need to buy a house?',
    a: '580 opens FHA financing at 3.5% down, and 620 is the general conventional floor. VA has no set minimum, though most lenders look for around 580 to 620. Better scores mean better pricing, so if you are close to a tier break it is worth a short conversation before applying.',
  },
  {
    category: 'Credit & Qualifying',
    homepage: false,
    q: 'My credit is not great. Can you help me fix it?',
    a: 'Yes. I review your report with you and identify the specific items that would move your score fastest — usually utilization on a couple of cards, a collection worth addressing, or an error worth disputing. Many clients gain 20 to 40 points in 30 to 60 days without paying a credit repair company.',
  },
  {
    category: 'Credit & Qualifying',
    homepage: false,
    q: 'How is debt-to-income calculated?',
    a: 'Total monthly debt payments divided by gross monthly income. Debt includes the new housing payment plus car loans, student loans, credit card minimums, and child support. It excludes utilities, groceries, insurance, and other living expenses. Conventional generally tops out around 45%, FHA often goes higher with strong compensating factors.',
  },
  {
    category: 'Credit & Qualifying',
    homepage: false,
    q: 'Do student loans stop me from qualifying?',
    a: 'No, though they factor into your ratio. Calculation rules differ by loan program — some use your actual income-driven payment, others require a percentage of the balance for deferred loans. Choosing the right program can meaningfully change how much house you qualify for.',
  },
  {
    category: 'Credit & Qualifying',
    homepage: false,
    q: 'Can I qualify after a bankruptcy or foreclosure?',
    a: 'Yes, once the waiting period is met and credit is re-established. FHA is generally two years after a Chapter 7 discharge and three years after a foreclosure. Conventional waiting periods are longer. Non-QM programs can sometimes work as soon as one day out of a completed event with a larger down payment.',
  },
  {
    category: 'Credit & Qualifying',
    homepage: false,
    q: 'How long do I need to be at my job?',
    a: 'Two years of employment history is standard, but it does not have to be with the same employer. Job changes within the same field are generally fine, and a new job in a new field with a signed offer letter can often work if the income is stable and salaried.',
  },
  {
    category: 'Credit & Qualifying',
    homepage: false,
    q: 'Does my spouse have to be on the loan?',
    a: 'Not necessarily. If one spouse has significantly stronger credit, applying alone sometimes produces better pricing. Texas is a community property state, so the non-borrowing spouse\u2019s debts may still be considered on certain loan types, and they will sign specific documents at closing. We look at both scenarios.',
  },
  {
    category: 'Credit & Qualifying',
    homepage: false,
    q: 'Can I use bonus, overtime, or commission income?',
    a: 'Yes, generally with a two-year history and evidence it is likely to continue. We average it, and a declining trend gets scrutinized. For commission-heavy earners, self-employed style programs sometimes qualify more of your income than conventional underwriting will.',
  },

  // ---------------------------------------------------------------- Down Payment
  {
    category: 'Down Payment',
    homepage: false,
    q: 'Can I use gift funds for my down payment?',
    a: 'Yes. FHA allows the entire down payment to be gifted, and conventional allows gifts on primary residences as well. The donor signs a gift letter and we document the transfer on both ends. Just do not deposit cash — it cannot be sourced and underwriting will exclude it.',
  },
  {
    category: 'Down Payment',
    homepage: false,
    q: 'What down payment assistance is available in Texas?',
    a: 'TSAHC runs Homes for Texas Heroes and Home Sweet Texas statewide, and TDHCA runs My First Texas Home along with a mortgage credit certificate. Several Austin-area cities and counties operate local programs. Terms, income limits, and funding availability change, so we verify current details before relying on any of them.',
  },
  {
    category: 'Down Payment',
    homepage: false,
    q: 'Do I have to be a first-time buyer for assistance programs?',
    a: 'Often, but not always. The standard definition is not having owned a primary residence in the past three years. Purchases in designated target areas and veteran-focused programs frequently waive the requirement entirely.',
  },
  {
    category: 'Down Payment',
    homepage: false,
    q: 'Can I borrow my down payment from my 401(k)?',
    a: 'Yes. A 401(k) loan is an acceptable source, and because you are borrowing from yourself, underwriting treats the repayment differently than other debt on some programs. Talk to your plan administrator about the terms, and let me model the effect on your ratio first.',
  },
  {
    category: 'Down Payment',
    homepage: false,
    q: 'How much should I put down if I can afford 20%?',
    a: 'It depends on what else that money could do. Twenty percent avoids mortgage insurance and lowers the payment, but keeping reserves liquid has real value — particularly for self-employed borrowers and investors. I show you the payment and total-cost comparison at several down payment levels and let you decide.',
  },
  {
    category: 'Down Payment',
    homepage: false,
    q: 'What is earnest money and is it part of my down payment?',
    a: 'Earnest money is a good-faith deposit, commonly around 1% of the purchase price, held by the title company after your offer is accepted. It is credited toward your down payment and closing costs at closing, so it is not an extra cost — just earlier timing.',
  },

  // ---------------------------------------------------------------- Self-Employed
  {
    category: 'Self-Employed',
    homepage: true,
    homepageOrder: 2,
    q: 'I\u2019m self-employed and write off a lot. Can I still qualify?',
    a: 'Yes. Tax-return underwriting is only one path. Bank statement loans use deposits, 1099 loans use gross income, P&L loans use your accountant\u2019s statement, and no-ratio programs don\u2019t use income at all. This is one of my specialties.',
  },
  {
    category: 'Self-Employed',
    homepage: false,
    q: 'How does a bank statement loan work?',
    a: 'We use 12 or 24 months of business or personal bank statements to establish income. Deposits are totaled, transfers and non-business items are removed, and an expense factor is applied — often 50% on business accounts, or a figure supported by your CPA. The result becomes your qualifying income.',
  },
  {
    category: 'Self-Employed',
    homepage: false,
    q: 'How long do I need to be self-employed to get a mortgage?',
    a: 'Two years is standard. One year can work on some programs when you have documented prior experience in the same line of work, which helps professionals who left a W-2 role to do the same job independently.',
  },
  {
    category: 'Self-Employed',
    homepage: false,
    q: 'Should I amend my tax returns to show more income?',
    a: 'Talk to me and your CPA before doing anything like that. Amending returns creates tax liability and draws underwriting scrutiny, and it is almost never necessary once you use a program designed for business owners.',
  },
  {
    category: 'Self-Employed',
    homepage: false,
    q: 'Are self-employed mortgage rates much higher?',
    a: 'They price above conventional loans because underwriting risk is higher. The comparison that matters is this loan versus continuing to rent, since a conventional loan you cannot qualify for is not an option. Many clients refinance into conventional financing two or three years later.',
  },
  {
    category: 'Self-Employed',
    homepage: false,
    q: 'I own 40% of an LLC. Does that count as self-employed?',
    a: 'Generally, ownership of 25% or more makes you self-employed for underwriting purposes, which brings your business returns and K-1 into the file. It also opens the alternative documentation programs, which is often an advantage rather than a burden.',
  },

  // ---------------------------------------------------------------- VA & Military
  {
    category: 'VA & Military',
    homepage: false,
    q: 'How many times can I use my VA loan benefit?',
    a: 'There is no limit. Entitlement is restored each time you sell and pay off a VA loan, and in some cases you can hold two VA loans at once using remaining entitlement — useful for PCS moves and for keeping a first home as a rental.',
  },
  {
    category: 'VA & Military',
    homepage: false,
    q: 'Am I exempt from the VA funding fee?',
    a: 'If you receive VA compensation for a service-connected disability, yes. Surviving spouses receiving Dependency and Indemnity Compensation are also exempt. Your Certificate of Eligibility confirms it, and the savings often exceed $9,000 on a typical Texas purchase.',
  },
  {
    category: 'VA & Military',
    homepage: false,
    q: 'Do VA loans really require zero down?',
    a: 'With full entitlement, yes — 100% financing, no down payment, and no monthly mortgage insurance. Some borrowers still choose to put money down to lower the payment, but nothing requires it.',
  },
  {
    category: 'VA & Military',
    homepage: false,
    q: 'Can I use a VA loan to buy a duplex or fourplex?',
    a: 'Yes, up to four units, as long as you occupy one of them. Rental income from the other units can sometimes help you qualify. It is one of the strongest wealth-building strategies available to service members.',
  },
  {
    category: 'VA & Military',
    homepage: false,
    q: 'What is a VA IRRRL?',
    a: 'The Interest Rate Reduction Refinance Loan is the VA streamline refinance. When rates drop, it lets you refinance an existing VA loan with minimal documentation, usually no appraisal, and a reduced funding fee.',
  },

  // ---------------------------------------------------------------- Investment Property
  {
    category: 'Investment Property',
    homepage: false,
    q: 'What is a DSCR loan?',
    a: 'A loan qualified on the property\u2019s rental income rather than your personal income. Divide gross rent by the full monthly payment including taxes, insurance, and HOA. Most programs want a ratio of 1.0 or better. No tax returns and no personal debt-to-income calculation.',
  },
  {
    category: 'Investment Property',
    homepage: false,
    q: 'How many investment properties can I finance?',
    a: 'Conventional financing caps you at ten financed properties. DSCR and portfolio lenders generally do not impose that limit, which is how investors scale past the first handful of doors.',
  },
  {
    category: 'Investment Property',
    homepage: false,
    q: 'Can I close in the name of my LLC?',
    a: 'On DSCR and most portfolio loans, yes. Conventional financing generally requires individual vesting. If liability protection matters to you, that alone can justify choosing a DSCR loan.',
  },
  {
    category: 'Investment Property',
    homepage: false,
    q: 'How much down payment do investment properties require?',
    a: 'Typically 20% to 25%. Conventional financing on a one-unit rental starts around 15% with mortgage insurance, though pricing is usually better at 20% or more. DSCR programs generally start at 20%.',
  },
  {
    category: 'Investment Property',
    homepage: false,
    q: 'Do short-term rentals qualify?',
    a: 'Some programs allow it using documented platform revenue or a short-term market rent analysis. Guidelines vary by lender and local ordinances vary by city, so we confirm both before you go under contract.',
  },

  // ---------------------------------------------------------------- Refinancing
  {
    category: 'Refinancing',
    homepage: false,
    q: 'How do I know if refinancing is worth it?',
    a: 'Divide your total closing costs by your monthly savings to get your break-even in months. If you plan to stay well past that point, it makes sense. I run this analysis for anyone who asks, and I will tell you when the answer is no.',
  },
  {
    category: 'Refinancing',
    homepage: false,
    q: 'How much equity do I need for a cash-out refinance in Texas?',
    a: 'Texas caps cash-out refinances on a primary residence at 80% of appraised value, so you must retain at least 20% equity. Texas also has specific Section 50(a)(6) rules and timing requirements that I walk clients through in detail.',
  },
  {
    category: 'Refinancing',
    homepage: false,
    q: 'Can I refinance to get rid of mortgage insurance?',
    a: 'Yes. For FHA borrowers this is often the main reason to refinance, because FHA mortgage insurance generally lasts the life of the loan. Once you hold 20% equity, moving to conventional removes it permanently.',
  },
  {
    category: 'Refinancing',
    homepage: false,
    q: 'What is a no-lender-fee refinance?',
    a: 'The lender fees are absorbed through loan pricing instead of charged at closing. The rate may be slightly higher, but your out-of-pocket cost drops sharply and the break-even shortens. I model both versions so you can compare.',
  },
  {
    category: 'Refinancing',
    homepage: false,
    q: 'Should I use a cash-out refinance to pay off credit cards?',
    a: 'It can be a powerful move — trading 22% unsecured interest for mortgage-rate interest changes budgets immediately. The caution is real: you are converting unsecured debt into debt secured by your home, and it only works if the cards stay paid off afterward.',
  },

  // ---------------------------------------------------------------- Closing
  {
    category: 'Closing',
    homepage: true,
    homepageOrder: 5,
    q: 'Can I buy a new home before selling my current one?',
    a: 'Yes — that\u2019s exactly what the Buy Before You Sell program is for. It lets you make a non-contingent offer, which sellers strongly prefer, and sell your current home afterward without pressure.',
  },
  {
    category: 'Closing',
    homepage: false,
    q: 'What are closing costs in Texas and who pays them?',
    a: 'Buyer closing costs typically run 2% to 3% of the purchase price, covering lender fees, title, escrow, recording, and prepaid taxes and insurance. Sellers can contribute toward them, and that contribution is negotiable within program limits.',
  },
  {
    category: 'Closing',
    homepage: false,
    q: 'What is the Closing Disclosure and when do I get it?',
    a: 'It is the final itemization of your loan terms and costs. Federal law requires you to receive it at least three business days before closing so you can review it without pressure. I go through it with you line by line.',
  },
  {
    category: 'Closing',
    homepage: false,
    q: 'What should I avoid doing between preapproval and closing?',
    a: 'Do not open new credit accounts, finance furniture or a car, change jobs, make large undocumented deposits, or move money between accounts without telling me. Underwriting re-verifies your file right before closing, and any of those can derail it.',
  },
  {
    category: 'Closing',
    homepage: false,
    q: 'What happens on closing day?',
    a: 'You bring a photo ID and wired funds, sign at the title company, and typically get keys once the loan funds and the deed records. In Texas a purchase generally funds the same day. Refinances on a primary residence include a three-day right of rescission before funding.',
  },
  {
    category: 'Closing',
    homepage: false,
    q: 'Can my closing date be delayed?',
    a: 'It happens, usually from appraisal timing, a late-arriving underwriting condition, or a title issue. Setting realistic contract dates and chasing conditions early is how I prevent it. If a delay is coming, you will hear it from me before you hear it from anyone else.',
  },
];

export const homepageFaqs: Faq[] = faqs
  .filter((faq) => faq.homepage)
  .sort((a, b) => (a.homepageOrder ?? 99) - (b.homepageOrder ?? 99));

export function faqsByCategory(category: FaqCategory): Faq[] {
  return faqs.filter((faq) => faq.category === category);
}
