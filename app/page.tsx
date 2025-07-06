import React from 'react'
import Hero from '@/components/Hero'
import WelcomeSection from '@/components/WelcomeSection'
import ChurchInfo from '@/components/ChurchInfo'
import ReceptionInfo from '@/components/ReceptionInfo'
import DressCode from '@/components/DressCode'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WelcomeSection />
      <ChurchInfo />
      <ReceptionInfo />
      <DressCode />
      <Footer />
    </main>
  )
} 