import Hero from '@/components/Hero'
import WelcomeSection from '@/components/WelcomeSection'
import ChurchInfo from '@/components/ChurchInfo'
import DressCode from '@/components/DressCode'
import Timeline from '@/components/Timeline'
import ImportantInfo from '@/components/ImportantInfo'
import PhotoSection from '@/components/PhotoSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WelcomeSection />
      <ChurchInfo />
      <DressCode />
      <Timeline />
      <PhotoSection />
      <ImportantInfo />
      <Footer />
    </main>
  )
} 