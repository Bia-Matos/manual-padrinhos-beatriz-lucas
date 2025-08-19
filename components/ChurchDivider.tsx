import React from 'next/image'

export default function ChurchDivider() {
  return (
    <div className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/igreja-boa-viagem.jpeg"
          alt="Igreja Boa Viagem - Local da cerimônia"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 70%' }}
        />
      </div>
      
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FAF8E7] to-transparent"></div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF8E7] to-transparent"></div>
    </div>
  )
} 