import { Heart, Calendar, MapPin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#D1006F' }}></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: '#D1006F' }}></div>
      </div>
      
      <div className="container-max section-padding relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Logo and Message */}
          <div className="text-center md:text-left space-y-6">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/40 bg-white/20 backdrop-blur-md">
                <Image
                  src="/images/logo-lb.png"
                  alt="Logo B&L"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-display text-xl font-semibold text-gray-700">
                Beatriz & Lucas
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Este manual foi feito com muito carinho para vocês. Esperamos que tenham 
                todas as informações necessárias para nosso grande dia! 💕
              </p>
            </div>
          </div>

          {/* Wedding Information */}
          <div className="text-center md:text-right space-y-6">
            <h4 className="font-display text-lg font-semibold text-gray-700">
              Informações do Casamento
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-end space-x-3">
                <Calendar className="w-4 h-4" style={{ color: '#D1006F' }} />
                <span className="text-sm text-gray-600">26 de Abril de 2026</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-end space-x-3">
                <MapPin className="w-4 h-4" style={{ color: '#D1006F' }} />
                <span className="text-sm text-gray-600">Igreja Boa Viagem</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-end space-x-3">
                <Heart className="w-4 h-4 fill-current" style={{ color: '#D1006F' }} />
                <span className="text-sm text-gray-600">Celebração do Amor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
          <div className="mx-4">
            <Heart className="w-6 h-6 fill-current" style={{ color: '#D1006F' }} />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
        </div>

        {/* Final message */}
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 inline-block">
            <p className="text-sm text-gray-600">
              Com todo o nosso amor e carinho ❤️
            </p>
            <p className="font-display text-lg font-semibold mt-2" style={{ color: '#D1006F' }}>
              Beatriz & Lucas
            </p>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
      </div>
    </footer>
  )
} 