export type Education = {
  degree: string
  school: string
  period: string
  /** Logo under public/images/education/ */
  logo?: string
  /** mono logos (e.g. Helsinki wordmark) invert on dark; color logos stay as-is */
  logoTheme?: 'mono' | 'color'
  /** Highlighted grade badge, e.g. MSc GPA */
  grade?: string
  note?: string
  courses?: string
}
export const education: Education[] = [
  {
    degree: 'MSc Computer Science & Engineering',
    school: 'University of Oulu',
    period: 'Sep 2025 — Jun 2027',
    logo: '/images/education/oulu.png',
    logoTheme: 'mono',
    note: 'Specialization: Cyber Security, Software & Data Security.',
    courses: 'Courses: Distributed Systems, Advanced Software Quality & Security, Cryptographic Systems & their Weaknesses, Security Engineering, Professional Software Engineering Processes & Human Factors, Data Mining, International Crisis Management.',
  },
  {
    degree: 'BSc Computer Science',
    school: 'National University of Sciences & Technology',
    period: 'Aug 2020 — May 2024',
    logo: '/images/education/nust.svg',
    logoTheme: 'color',
    note: 'Thesis: OptiGuard — attention-driven, explainable glaucoma classification, published at IEEE EMBC 2025.',
    courses: 'Courses: Data Structures & Algorithms, Database Systems, Web Engineering, Software Engineering, Information Security, Distributed Computing, Artificial Intelligence, Deep Learning, Operating Systems, Computer Networks.',
  },
]