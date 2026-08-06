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
    meta: ['2026–Present', 'INTERNSHIP', 'OULU · FINLAND'],
    kicker: 'University of Oulu',
    title: 'Research Intern',
    summary:
      'Research intern extending the open-source AVISE security evaluation framework to Text-to-Image generative AI models, co-authoring a research paper formalizing the methodology.',
    points: [
      'Extended the open-source AVISE security evaluation framework to Text-to-Image generative models, designing adversarial and prompt-injection resistance tests across 5 model providers, including Nano Banana Pro (Gemini 3 Pro Image), Grok Imagine, and GPT-5.4 Image 2.',
      'Co-authoring a research paper formalizing security vulnerability methodologies for generative AI systems, using Python, Docker, and OpenRouter.',
      'Built OpenRouter-based model connectors enabling standardized, reproducible security evaluation across 4+ T2I model providers spanning Google, X-AI, OpenAI, and open-source diffusion architectures.',
    ],
    tech: ['Python', 'Docker', 'OpenRouter', 'GitHub'],
    href: 'https://github.com/ouspg/AVISE',
  },
  {
    n: '02',
    meta: ['2024–2026', 'FULL-TIME', 'IRELAND · REMOTE'],
    kicker: 'Datapulse Technologies (FinTech)',
    title: 'Full Stack Developer',
    summary:
      "Full Stack Developer on multi-region whitelabel payment gateway — architected and delivered a full replacement platform end-to-end for a legacy system processing thousands of daily transactions.",
    points: [
      'Architected and delivered a full replacement payment gateway platform end-to-end, closing critical functional gaps in a legacy multi-region system used in production.',
      'Improved system performance by 25% and reduced latency on a legacy whitelabel payment architecture, sustaining stability under peak transaction loads.',
      'Integrated 3+ global acquirers (E-Comprocessing, Transflo, Rapyd) and digital wallets (Apple Pay, Google Pay) via REST APIs, enabling secure multi-region payment processing.',
      'Unified fragmented physical terminal systems into a single gateway supporting both card-present and card-not-present transactions.',
      'Built and scaled a microservices architecture (Java/Spring Boot) processing thousands of daily transactions with high fault tolerance.',
      'Owned CI/CD pipeline design (GitHub → Jenkins → Docker → Kubernetes), enabling zero-downtime, single-push production releases.',
      'Led PCI-DSS compliance readiness end-to-end, implementing secure data handling, access controls, and SIEM/Cloud Defender audit logging — closing 15+ audit findings ahead of certification.',
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'C#', 'ASP.NET Core', 'React JS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'PostgreSQL', 'MSSQL'],
    href: 'https://pbtgateway.com/',
  },
  {
    n: '03',
    meta: ['2022–2024', 'PART TIME', 'ISLAMABAD, PAKISTAN'],
    kicker: 'Rapidev (DefTech)',
    title: 'Trainee Engineer',
    summary:
      'Contributed to RapiGuard, an Anti-UAV defense system, integrating hardware sensors for real-time aerial threat detection.',
    points: [
      'Integrated 3 hardware sensors into the RapiGuard Anti-UAV system, enabling real-time aerial threat detection.',
      'Built a Key Management Application handling full encryption key lifecycles for critical military communications.',
      'Engineered secure cryptographic key injection via UART, ensuring protected hardware-software data transfer for defense-grade systems.',
    ],
    tech: ['C#', 'ASP.NET Core', 'Python', 'SQL', 'UART'],
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
