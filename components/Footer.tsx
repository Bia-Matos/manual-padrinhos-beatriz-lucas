import { Heart, Calendar, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 fill-current mr-3" style={{ color: '#D1006F' }} />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-700">
              Beatriz & Lucas
            </h2>
            <Heart className="w-8 h-8 fill-current ml-3" style={{ color: '#D1006F' }} />
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Obrigado por fazerem parte da nossa história. Vocês são muito especiais 
            para nós e mal podemos esperar para celebrar este momento único com vocês!
          </p>

          {/* Wedding Details Summary */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 mb-3" style={{ color: '#D1006F' }} />
              <h3 className="font-semibold text-lg mb-2 text-gray-700">Data</h3>
              <p className="text-gray-600">26 de Abril, 2026</p>
              <p className="text-gray-500 text-sm">Domingo</p>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" style={{ color: '#D1006F' }} />
              <h3 className="font-semibold text-lg mb-2 text-gray-700">Local</h3>
              <p className="text-gray-600">Igreja São Francisco</p>
              <p className="text-gray-500 text-sm">16:30h</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Heart className="w-8 h-8 mb-3 fill-current" style={{ color: '#D1006F' }} />
              <h3 className="font-semibold text-lg mb-2 text-gray-700">Amor</h3>
              <p className="text-gray-600">Para sempre</p>
              <p className="text-gray-500 text-sm">e além</p>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-white/40 backdrop-blur-sm p-8 rounded-lg border border-gray-200/50">
            <h3 className="font-display text-2xl font-semibold mb-4 text-gray-700">
              Com Todo o Nosso Amor
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Este manual foi feito com muito carinho para vocês. Esperamos que tenham 
              todas as informações necessárias. Se surgirem dúvidas, não hesitem em nos 
              procurar. Até o grande dia! 💕
            </p>
          </div>
        </div>

        {/* Social Media / Hashtag */}
        <div className="border-t border-gray-300 pt-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Não esqueçam de usar nossa hashtag oficial:
            </p>
            <div className="text-white px-6 py-3 rounded-full inline-block font-mono text-lg font-semibold mb-6" style={{ backgroundColor: '#D1006F' }}>
              #BeatrizELucas2026
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>© 2026 Manual dos Padrinhos</span>
              <span>•</span>
              <span>Feito com ❤️ para nossos amigos especiais</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#D1006F' }}></div>
      </div>
    </footer>
  )
} 