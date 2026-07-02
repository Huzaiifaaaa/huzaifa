export type SkillGroup = {
  label: string
  items: string[]
}
// "Tools & Materials" — grouped to match the Path section of the design.
export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Java', 'C#', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C', 'C++'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['Spring Boot', 'ASP.NET / Core', 'React', 'Node', 'Hibernate', 'Flask'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MSSQL', 'MySQL', 'YugabyteDB'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['GCP', 'Azure', 'Azure Kubernetes Service', 'KeyVault', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
  },
  {
    label: 'Security & Compliance',
    items: ['PCI-DSS', 'GDPR', 'OWASP Top 10'],
  },
  {
    label: 'Tools & Platforms',
    items: ['IntelliJ', 'Git', 'Visual Studio', 'VS Code', 'Postman', 'Jira'],
  },
]