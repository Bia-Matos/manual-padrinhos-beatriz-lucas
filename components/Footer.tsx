import { Heart, Calendar, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="text-center">
          <h3 className="font-display text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
            Com Todo o Nosso Amor
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            Este manual foi feito com muito carinho para vocês. Esperamos que tenham 
            todas as informações necessárias. Se surgirem dúvidas, não hesitem em nos 
            procurar. Até o grande dia! 💕
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#D1006F' }}></div>
      </div>
    </footer>
  )
} 