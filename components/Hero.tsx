import React from 'react'
import Image from 'next/image'
import { Heart, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ backgroundColor: '#F5F0E8' }}>
      {/* Background Image - Only for Mobile */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/igreja-aquarela.png"
          alt="Igreja em aquarela - local da cerimônia"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8]/70 via-[#F5F0E8]/40 to-[#F5F0E8]/60"></div>
      </div>
      
      {/* Desktop Background - Original gradient */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-50/70 via-transparent to-orange-50/50"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-yellow-50/30 to-amber-50/40"></div>
      </div>
      
      {/* Logo positioned absolutely at top - bigger */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <Image
          src="/images/logo-lb.png"
          alt="Logo Beatriz & Lucas"
          width={100}
          height={100}
          className="w-20 h-20 md:w-28 md:h-28 object-contain opacity-90"
          priority
        />
      </div>
      
      {/* Main Content - Responsive Design */}
      <div className="relative z-10 px-4 py-8 w-full flex-1 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center justify-center text-center space-y-6 min-h-[85vh] pt-8">
            {/* Content Container with Transparency */}
            <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/40 space-y-6">
              {/* Main Title */}
              <div className="space-y-1">
                <h1 className="font-display text-3xl sm:text-4xl font-light text-gray-800 tracking-[0.1em] uppercase leading-tight">
                  MANUAL
                </h1>
                <h2 className="font-display text-3xl sm:text-4xl font-light text-gray-800 tracking-[0.1em] uppercase leading-tight">
                  DOS
                </h2>
                <h3 className="font-display text-3xl sm:text-4xl font-light text-gray-800 tracking-[0.1em] uppercase leading-tight">
                  PADRINHOS
                </h3>
              </div>
              
              {/* Small pink heart icon */}
              <div className="flex items-center justify-center my-3">
                <Heart className="w-5 h-5 fill-current" style={{ color: '#D1006F' }} />
              </div>
              
              {/* Names in beautiful script */}
              <div className="text-center">
                <p className="font-alex-brush text-3xl sm:text-4xl text-gray-700 tracking-wide leading-relaxed">
                  Beatriz & Lucas
                </p>
              </div>
              
              {/* Mobile Date Section */}
              <div className="flex flex-col items-center space-y-3 py-4">
                <p className="text-xs text-gray-600 uppercase tracking-[0.3em] font-light">Nosso Grande Dia</p>
                <div className="text-center">
                  <p className="font-display text-lg font-light text-gray-700 tracking-wide">26 de Abril de 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Original */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-0 items-center min-h-[70vh]">
            
            {/* Left Column - Typography */}
            <div className="lg:col-span-4 text-center space-y-6">
              {/* Main Title */}
              <div>
                <h1 className="font-display text-4xl xl:text-5xl font-light text-gray-700 tracking-[0.1em] uppercase leading-[0.9] mb-3">
                  MANUAL
                </h1>
                <h2 className="font-display text-4xl xl:text-5xl font-light text-gray-700 tracking-[0.1em] uppercase leading-[0.9] mb-3">
                  DOS
                </h2>
                <h3 className="font-display text-4xl xl:text-5xl font-light text-gray-700 tracking-[0.1em] uppercase leading-[0.9]">
                  PADRINHOS
                </h3>
              </div>
              
              {/* Small pink heart icon */}
              <div className="flex items-center justify-center my-6">
                <Heart className="w-4 h-4 fill-current" style={{ color: '#D1006F' }} />
              </div>
              
              {/* Names in beautiful script */}
              <div className="text-center">
                <p className="font-alex-brush text-4xl xl:text-5xl text-gray-600 tracking-wide leading-relaxed">
                  Beatriz & Lucas
                </p>
              </div>
            </div>

            {/* Center Column - Elegant Date Section */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-6 px-6">
              {/* Decorative top element */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D1006F' }}></div>
              </div>
              
              {/* Wedding Date */}
              <div className="text-center space-y-3">
                <p className="text-xs text-gray-500 uppercase tracking-[0.3em] font-light">Nosso Grande Dia</p>
                <div className="space-y-1">
                  <p className="font-display text-2xl font-light text-gray-700 tracking-wide">26</p>
                  <p className="text-sm text-gray-600 uppercase tracking-widest font-light">Abril</p>
                  <p className="font-display text-lg font-light text-gray-700 tracking-wider">2026</p>
                </div>
              </div>
              
              {/* Decorative bottom element */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D1006F' }}></div>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              </div>
            </div>
            
            {/* Right Column - Watercolor Image */}
            <div className="lg:col-span-4 relative h-full flex items-center justify-start lg:pl-8">
              <div className="relative w-full max-w-xl">
                <div className="relative">
                  <Image
                    src="/images/igreja-aquarela.png"
                    alt="Igreja em aquarela - local da cerimônia"
                    width={800}
                    height={1000}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                    priority
                  />
                  {/* Subtle border overlay */}
                  <div className="absolute inset-0 rounded-lg border border-gray-200/40 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Beautiful scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-center">
        {/* Mobile - Only Arrow */}
        <div className="lg:hidden">
          <ChevronDown className="w-8 h-8 animate-bounce" style={{ color: '#D1006F' }} />
        </div>
        
        {/* Desktop - Full indicator */}
        <div className="hidden lg:flex flex-col items-center space-y-3 animate-pulse">
          <div className="w-6 h-10 border-2 rounded-full relative bg-white/30 backdrop-blur-sm shadow-sm" style={{ borderColor: '#D1006F' }}>
            <div className="w-1 h-3 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-scroll" style={{ backgroundColor: '#D1006F' }}></div>
          </div>
          <p className="text-xs font-light tracking-widest uppercase px-2" style={{ color: '#D1006F' }}>Role para baixo</p>
        </div>
      </div>
    </section>
  )
} 