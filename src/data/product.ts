// product.ts — Personal / founder products. Source of truth: Base_One_Page.pdf.

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
    kicker: 'Founder & Full Stack Engineer',
    title: 'Nafalytics — Stock Portfolio Tracking Platform',
    summary:
      'Nafalytics — from "Nafa" (profit) and "analytics" — is a stock market portfolio tracking application built from scratch to fill a gap in the Pakistani market for reliable portfolio management tools. Built solo over 3 months and used by 300 active users to track portfolios, real-time profit/loss, and trade activity.',
    points: [
      'Built and launched the product from scratch in 3 months, growing to 300 active users tracking portfolios.',
      'Developed real-time profit/loss tracking, historical performance analytics, automated payouts, and a notification engine.',
      'Implemented FIFO-based trade matching for accurate cost basis and realized gain/loss calculation.',
      'Built a watchlist feature for users to monitor stocks outside their active holdings.',
      'Directed the full product lifecycle — design, database, development, and cloud deployment — end to end as sole engineer.',
      'Set up automated CI/CD workflows via GitHub Actions across Azure for continuous, reliable releases.',
    ],
    tech: ['Java', 'Spring Boot', 'React JS', 'PostgreSQL', 'Azure', 'Google Cloud', 'GitHub Actions'],
    href: 'https://nafalytics.com',
  },
]
