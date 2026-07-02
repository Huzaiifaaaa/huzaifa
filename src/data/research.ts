// research.ts — Publications. New file; no prior implementation existed for this section.

export type Publication = {
  n: string
  title: string
  authors: string[]
  venue: string
  location: string
  date: string
  type: string
  topics: string[]
  summary: string
  highlights: string[]
  links: { label: string; href: string }[]
}

export const research: Publication[] = [
  {
    n: '01',
    title: 'OptiGuard: Generalized, Attention-Driven & Explainable Glaucoma Classification',
    authors: ['Syed Safi Ullah Shah', 'Muhammad Huzaifa', 'Humza Khawar Khan Tareen', 'Muhammad Naseer Bajwa'],
    venue: '47th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC)',
    location: 'Copenhagen, Denmark',
    date: '2025',
    type: 'IEEE Conference Paper',
    topics: ['Glaucoma Detection', 'Computer-Aided Diagnosis', 'Artificial Intelligence', 'Deep Learning'],
    summary:
      'A generalized, attention-driven, and explainable deep learning tool for glaucoma classification, built to assist early diagnosis through interpretable model predictions rather than black-box outputs.',
    highlights: [
      'Achieved state-of-the-art results on the G-1020 and SMDG glaucoma datasets.',
      'Awarded 1st Best Project distinction, adjudged by industry experts for potential impact and technical excellence.',
      'Presented for publication at IEEE EMBC 2025 in Copenhagen, Denmark.',
    ],
    links: [
      { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/document/11253669' },
      { label: 'Project Page', href: 'https://linktr.ee/optiguard' },
    ],
  },
]