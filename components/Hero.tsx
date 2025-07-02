import React from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center" style={{ backgroundColor: '#F5F0E8' }}>
      {/* Elegant Mirror Effect Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-50/70 via-transparent to-orange-50/50"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-yellow-50/30 to-amber-50/40"></div>
      </div>
      
      {/* Logo positioned absolutely at top - bigger */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <Image
          src="/images/logo-lb.png"
          alt="Logo Beatriz & Lucas"
          width={80}
          height={80}
          className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-90"
          priority
        />
      </div>
      
      {/* Main Content - Perfectly Centered */}
      <div className="relative z-10 px-6 py-16 w-full flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-0 items-center min-h-[70vh]">
            
            {/* Left Column - Typography - smaller fonts */}
            <div className="lg:col-span-4 text-center lg:text-right space-y-6 lg:pr-8">
              {/* Main Title - reduced size */}
              <div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-700 tracking-[0.1em] uppercase leading-[0.9] mb-3">
                  Manual dos
                </h1>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-600 tracking-[0.15em] uppercase leading-[0.9]">
                  Padrinhos
                </h2>
              </div>
              
              {/* Elegant divider */}
              <div className="flex items-center justify-center lg:justify-end my-6">
                <div className="h-px bg-gray-300 w-16"></div>
                <Heart className="w-3 h-3 fill-current mx-4" style={{ color: '#D1006F' }} />
                <div className="h-px bg-gray-300 w-16"></div>
              </div>
              
              {/* Names in beautiful script */}
              <div className="text-center lg:text-right">
                <p className="text-3xl md:text-4xl lg:text-5xl text-gray-600 tracking-wide leading-relaxed" style={{ fontFamily: 'Dancing Script, cursive' }}>
                  Beatriz & Lucas
                </p>
              </div>
            </div>

            {/* Center Column - Elegant Date Section - Centered with logo */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center space-y-6 px-6">
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
      
      {/* Bottom Section - Only scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <div className="animate-bounce">
          <div className="w-6 h-10 border rounded-full mx-auto flex justify-center bg-white/30" style={{ borderColor: '#D1006F' }}>
            <div className="w-0.5 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#D1006F' }}></div>
          </div>
          <p className="text-xs mt-2 font-light tracking-wide uppercase" style={{ color: '#D1006F' }}>Role para baixo</p>
        </div>
      </div>
    </section>
  )
} 