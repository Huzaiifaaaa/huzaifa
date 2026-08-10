import { Header } from './components/Header'
import { ScrollProgress } from './components/ScrollProgress'
import { SiteFooter } from './components/SiteFooter'
import { Hero } from './sections/Hero'
import { WorkSection } from './sections/WorkSection'
import { PathSection } from './sections/PathSection'
import { ProductSection } from './sections/ProductSection'
import { ResearchSection } from './sections/ResearchSection'
import { CertificationsSection } from './sections/CertificationsSection'
import { ContactSection } from './sections/ContactSection'

/** Single-page portfolio: hero → work → path → product → research → certifications → contact. */
export function Portfolio() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="top">
        <Hero />
        <WorkSection />
        <PathSection />
        <ProductSection />
        <ResearchSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
