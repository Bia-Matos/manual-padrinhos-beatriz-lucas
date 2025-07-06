"use client"

import React from 'react'
import Image from 'next/image'
import { Menu, X, Heart } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navigationItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Boas-vindas', href: '#welcome' },
    { name: 'Igreja', href: '#church' },
    { name: 'Recepção', href: '#reception' },
    { name: 'Dress Code', href: '#dresscode' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/30 shadow-sm">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/40">
              <Image
                src="/images/logo-lb.png"
                alt="Logo B&L"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group text-sm"
                style={{ color: '#D1006F' }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#D1006F' }}></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-white/20 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/30 py-3">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 px-3 rounded-md text-gray-700 hover:bg-white/20 font-medium transition-colors duration-200 text-sm"
                  style={{ color: '#D1006F' }}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 