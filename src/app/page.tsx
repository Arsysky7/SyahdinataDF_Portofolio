import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProfileSection from '@/components/ProfileSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import HackTheBoxSection from '@/components/HackTheBoxSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProfileSection />
        <SkillsSection />
        <ProjectsSection />
        <HackTheBoxSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
