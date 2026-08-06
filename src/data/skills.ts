export type SkillGroup = {
  label: string
  items: string[]
}
// "Tools & Materials" — synced to the Technical Skills section of Base_One_Page.pdf.
export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Java', 'C#', 'Python', 'Go', 'JavaScript', 'TypeScript', 'SQL', 'C', 'C++'],
  },
  {
    label: 'Backend & Frameworks',
    items: ['Spring Boot', 'ASP.NET Core', 'Node.js', 'React JS', 'REST APIs', 'API Design', 'Microservices', 'Hibernate'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MSSQL', 'MySQL', 'YugabyteDB'],
  },
  {
    label: 'Messaging & Event-Driven Systems',
    items: ['Apache Kafka', 'RabbitMQ'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['Azure', 'Azure Kubernetes Service', 'KeyVault', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD'],
  },
  {
    label: 'Software Engineering',
    items: ['System Design', 'Distributed Systems', 'Object-Oriented Programming', 'Agile/Scrum', 'Unit Testing', 'Test Automation', 'Technical Documentation'],
  },
  {
    label: 'Security & Compliance',
    items: ['PCI-DSS', 'GDPR', 'OWASP Top 10', 'SIEM', 'Vulnerability Assessment', 'Secure System Design'],
  },
  {
    label: 'AI Tools',
    items: ['Claude Code', 'Codex', 'Cursor', 'GitHub Copilot'],
  },
]
