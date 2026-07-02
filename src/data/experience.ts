// Selected Work — the three roles, derived from Base_CV.pdf (source of truth).
export type Experience = {
  /** display index, e.g. "01" */
  n: string
  /** meta lines under the number (dates · employment · place) */
  meta: string[]
  /** mono kicker, e.g. "XSTRYV · Recruitment Platform" */
  kicker: string
  /** job title from CV */
  title: string
  summary: string
  /** one or two highlighted ◇ points */
  points: string[]
  tech: string[]
  href?: string
}

export const experience: Experience[] = [
  {
    n: '01',
    meta: ['2024–2026', 'FULL-TIME', 'IRELAND · REMOTE'],
    kicker: 'Datapulse Technologies',
    title: 'Full-Stack Software Engineer — Fintech',
    summary:
      'Full-stack engineer on an EU based whitelabel payment gateway spanning multiple regions, driving the transition from a legacy architecture to a high efficiency replacement system while leading day to day delivery across the engineering team. Owned CI/CD and cloud deployments, enabling repeatable, zero downtime releases on a single git push.',
    points: [
      'Improved performance 25% and cut latency on a legacy architecture handling thousands of daily transactions.',
      'Integrated global acquirers (E-Comprocessing, Planet, Rapyd) and digital wallets (Apple Pay, Google Pay) across regions.',
      'Unified independent physical terminals into a single gateway for card-present and card-not-present transactions.',
      'Maintained a scalable microservices architecture processing thousands of daily transactions with high reliability and fault tolerance.',
      'Led day-to-day engineering task allocation and code review, mentoring team members on the replacement gateway build.',
      'Led PCI-DSS compliance activities — secure data handling, access controls, and audit logging via SIEM and Cloud Defender — coordinating directly with the compliance team.',
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'C#', 'ASP.NET Core', 'React JS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'PostgreSQL', 'MSSQL'],
    href: 'https://pbtgateway.com/',
  },
  {
    n: '02',
    meta: ['2022–2024', 'PART TIME', 'ISLAMABAD, PAKISTAN'],
    kicker: 'Rapidev',
    title: 'Trainee Engineer — DefTech',
    summary:
      'Contributed to RapiGuard, an Anti-UAV defense system for real-time detection and neutralization of aerial threats, integrating hardware sensors (detectors, jammers, spoofers) with software control applications for real-time response.',
    points: [
      'Built a Key Management Application for secure radio communications, managing the lifecycle of encryption keys for mission-critical hardware.',
      'Engineered cryptographic key injection into radio units over UART, ensuring secure and reliable data transfer between software and hardware.',
      'Developed a Tactical Situational Awareness mobile app in Flutter for real-time geospatial data visualization on Android.',
    ],
    tech: ['C#', 'ASP.NET Core', 'Python', 'React JS', 'Flutter', 'SQL', 'UART'],
    href: 'https://rapidev.ae',
  },
  {
    n: '03',
    meta: ['2023', 'INTERNSHIP', 'SAN FRANCISCO, USA · REMOTE'],
    kicker: 'Bitnine',
    title: 'Software Engineering Intern - Open Source',
    summary:
      'Contributed to Apache\u2019s open-source graph-based software solutions, extending PostgreSQL\u2019s capabilities via AGE, a graph extension for advanced data handling.',
    points: [
      'Developed the AG Cloud website, providing a user-friendly interface for accessing cloud-based graph solutions.',
      'Enhanced AGE functionality and performance as part of the core open-source contributor team.',
    ],
    tech: ['C++', 'Go', 'React JS', 'Node JS', 'MongoDB', 'PostgreSQL'],
    href: 'https://age.apache.org/',
  },
]