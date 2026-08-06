// product.ts — Personal / founder products. Source of truth: Base_CV.pdf.

export type Product = {
  /** display index, e.g. "01" */
  n: string
  /** meta lines under the number */
  meta: string[]
  /** mono kicker, e.g. "NAFALYTICS · Stock Portfolio Tracker" */
  kicker: string
  title: string
  summary: string
  points: string[]
  tech: string[]
  href?: string
}

export const products: Product[] = [
  {
    n: '01',
    meta: [''],
    kicker: 'Founder & Sole Developer',
    title: 'Nafalytics — Stock Portfolio Tracking Platform',
    summary:
      'Nafalytics \u2014 from "Nafa" (profit) and "analytics" \u2014 is a stock market portfolio tracking application built from scratch to fill a gap in the Pakistani market for reliable portfolio management tools. Built solo over 3 months and used by 300 active users to track portfolios, real-time profit/loss, and trade activity.',
    points: [

      'Built and launched the product from scratch in 3 months, growing to 300 active users tracking portfolios.',
      'Built market views with visual graphs for price action and portfolio performance, plus historical performance analytics.',
      'Implemented FIFO-based trade matching for accurate cost basis and realized gain/loss calculation.',
      'Implemented dividend tracking with automated dividend notifications.',
      'Built a watchlist feature for users to monitor stocks outside their active holdings.',
      'Owned the full product lifecycle \u2014 design, database, development, and cloud deployment \u2014 end to end as sole engineer.',
      'Set up automated CI/CD workflows via GitHub Actions across Azure for continuous, reliable releases.',
    ],
    tech: ['Java', 'Spring Boot', 'React JS', 'PostgreSQL', 'Azure', 'Google Cloud', 'GitHub Actions'],
    href: 'https://nafalytics.com',
  },
]