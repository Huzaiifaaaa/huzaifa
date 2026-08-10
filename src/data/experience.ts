// Selected Work — derived from Base_One_Page.pdf (source of truth).
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
    meta: ['2026', 'INTERNSHIP', 'OULU · FINLAND'],
    kicker: 'University of Oulu',
    title: 'Research Intern',
    summary:
      'Research intern extending the AVISE security evaluation framework to Text-to-Image generative AI models, co-authoring a research paper submitted to NordSec 2026.',
    points: [
      'Extended the AVISE security evaluation framework to Text-to-Image models, designing a 16-case adversarial test suite for style-escalation resistance.',
      'Co-authored a research paper formalizing security vulnerability methodologies for generative AI systems, submitted to NordSec 2026.',
      'Built OpenRouter based model connectors enabling standardized, reproducible security evaluation across 4+ T2I model providers spanning Google, X-AI, OpenAI, and open-source diffusion architectures.',
    ],
    tech: ['Python', 'Docker', 'OpenRouter', 'GitHub'],
    href: 'https://github.com/ouspg/AVISE',
  },
  {
    n: '02',
    meta: ['2024–2026', 'FULL-TIME', 'IRELAND · REMOTE'],
    kicker: 'Datapulse Technologies (FinTech)',
    title: 'Full Stack Software Engineer',
    summary:
      "Full Stack Software Engineer on Datapulse's multi-region whitelabel payment gateway — architected and delivered a replacement platform from legacy infrastructure, now serving 1000+ merchants.",
    points: [
      'Architected and delivered a replacement payment gateway platform from legacy infrastructure, now serving 1000+ merchants, cutting production debugging time and improving system maintainability.',
      'Engineered a 25% performance gain and reduced latency on a legacy whitelabel payment architecture.',
      'Integrated 3 global acquirers (E-Comprocessing, Transflo, Rapyd) and digital wallets (Apple Pay, Google Pay).',
      'Consolidated separate payment systems into a single unified gateway, eliminating dual-maintenance overhead and unifying transaction visibility across card-present and card-not-present flows.',
      'Built and scaled a fault-tolerant microservices architecture (Java/Spring Boot) processing 1000+ transactions, monitored via Azure Sentinel.',
      'Stepped in as substitute lead for a 4 person engineering team, coordinating sprint planning and code reviews to keep the gateway rebuild on schedule.',
      'Owned CI/CD pipeline design (GitHub → Jenkins → Docker → Kubernetes), enabling zero-downtime, single-push production releases.',
      'Led PCI-DSS compliance readiness end-to-end, closing 15+ audit findings ahead of certification via SIEM driven access controls and audit logging.',
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'C#', 'ASP.NET Core', 'React JS', 'Azure', 'Azure Sentinel', 'Docker', 'Kubernetes', 'Jenkins', 'PostgreSQL', 'MSSQL'],
    href: 'https://pbtgateway.com/',
  },
  {
    n: '03',
    meta: ['2022–2024', 'PART TIME', 'ISLAMABAD, PAKISTAN'],
    kicker: 'Rapidev (DefTech)',
    title: 'Trainee Engineer',
    summary:
      'Contributed to RapiGuard, an Anti-UAV defense system, integrating hardware sensors via GraphQL for real-time aerial threat detection and neutralization.',
    points: [
      'Integrated 2 hardware sensors (detectors, jammers, spoofers) into the RapiGuard Anti-UAV system via GraphQL, enabling real-time aerial threat detection and neutralization for critical defense infrastructure deployments, with ongoing maintenance and UI/performance optimizations.',
      "Developed REST APIs for third-party system integration, expanding RapiGuard's interoperability with external defense software platforms.",
      'Architected a Key Management Application (KMA) for encryption key lifecycles, implementing secure UART-based cryptographic key injection into radio hardware — deployed across military communications systems in the Gulf region.',
      'Built a Tactical Situational Awareness mobile app in Flutter (Android) with Google Maps integration, delivering real-time geospatial visualization and device location tracking for field operators.',
    ],
    tech: ['C#', 'ASP.NET Core', 'GraphQL', 'UART', 'Flutter'],
    href: 'https://rapidev.ae',
  },
  {
    n: '04',
    meta: ['2023', 'INTERNSHIP', 'SAN FRANCISCO, USA · REMOTE'],
    kicker: 'Bitnine',
    title: 'Software Engineer — Open Source',
    summary:
      'Contributed to Apache’s open-source graph-based solution, extending PostgreSQL’s capabilities via AGE, a graph extension for advanced data handling.',
    points: [
      'Developed the AG Cloud website, providing a user-friendly interface for accessing cloud-based graph solutions.',
      'Enhanced AGE functionality and performance as part of the core open-source contributor team.',
    ],
    tech: ['C++', 'Go', 'React JS', 'Node JS', 'MongoDB', 'PostgreSQL'],
    href: 'https://age.apache.org/',
  },
]
