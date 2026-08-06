// stats.ts — Headline numbers pulled from experience/product/research (source of
// truth: those data files). Kept in sync manually since each ties to a specific claim.

export type Stat = {
  n: string
  label: string
}

export const stats: Stat[] = [
  { n: '25%', label: 'perf. gain on a live fintech gateway' },
  { n: '250+', label: 'users on Nafalytics, built solo' },
  { n: '1st', label: 'Best Project — IEEE EMBC 2025' },
  { n: 'L1', label: 'PCI DSS compliance owned end to end' },
]
