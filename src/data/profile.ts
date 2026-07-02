export const profile = {
  name: 'Muhammad Huzaifa',
  title: 'Software Engineer (Full Stack)',
  headline: 'Hand me the part that has to work. I’ll own it end to end.',
  tagline:
    'Full-stack engineer on a PCI DSS Level 1 payment gateway, and the only engineer on a live recruitment platform (1,600+ users, 250+ companies). MSc Computer Science, University of Helsinki.',
  summary:
    'Full-Stack Software Engineer and MSc Computer Science student at the University of Helsinki, with 2+ years owning production systems end to end. I take on the work most people would rather not touch — payment routing, PCI-compliant APIs, database internals — and I see it through: from a fintech gateway moving hundreds of millions of euros to a recruitment platform I ran as its only engineer.',
  location: 'Oulu, Finland',
  email: 'huzaiifaaaa@gmail.com',
  phone: '+358 46 664 9442',
  links: {
    linkedin: 'https://linkedin.com/in/huzaiifaaaa',
    github: 'https://github.com/huzaiifaaaa',
    stackoverflow: 'https://stackoverflow.com/users/16631465/huzaifa',
  },
  cv: {
    /** Served from public/downloads/ — copied to dist root on build (GitHub Pages). */
    path: '/downloads/Huzaifa_Resume.pdf',
    filename: 'Huzaifa_Resume.pdf',
  },
  metrics: [
    { value: 'PCI DSS L1', label: 'payment gateway' },
    { value: '1,600+', label: 'xstryv users' },
    { value: '5/5', label: 'msc · helsinki' },
  ],
} as const
