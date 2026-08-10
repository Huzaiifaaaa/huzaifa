// certifications.ts — derived from Base_One_Page.pdf (source of truth).

export type Certification = {
  /** display index, e.g. "01" */
  n: string
  /** meta lines under the number (date · type) */
  meta: string[]
  /** mono kicker, e.g. issuing platform */
  kicker: string
  title: string
  points: string[]
  tech: string[]
  href?: string
}

export const certifications: Certification[] = [
  {
    n: '01',
    meta: ['December 2025', 'COURSE WORK'],
    kicker: 'TryHackMe',
    title: 'Junior Penetration Tester',
    points: [
      'Hands-on experience with OWASP Top 10 vulnerabilities including SQL Injection (SQLi), Cross-Site Scripting (XSS), IDOR, and Command Injection.',
      'Skilled in Authentication Bypass, Server-Side Request Forgery (SSRF), and File Inclusion (LFI/RFI) exploitation and remediation.',
    ],
    tech: ['OWASP Top 10', 'SQLi', 'XSS', 'IDOR', 'SSRF', 'LFI/RFI'],
  },
]
