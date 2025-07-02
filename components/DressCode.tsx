import Image from 'next/image'
import { Palette, Shirt, Users } from 'lucide-react'

export default function DressCode() {
  const colorPalette = [
    { name: 'Rosa Antigo', color: '#D4A574', description: 'Cor principal para madrinhas' },
    { name: 'Dourado', color: '#F4D03F', description: 'Detalhes e acessórios' },
    { name: 'Verde Sage', color: '#9CAF88', description: 'Alternativa elegante' },
    { name: 'Nude/Bege', color: '#E8D7C3', description: 'Tons neutros' },
  ]

  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Dress Code
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Para que tudo fique harmonioso e lindo nas fotos, preparamos algumas 
            orientações sobre as cores e estilos para nossos padrinhos e madrinhas.
          </p>
        </div>

        {/* Color Palette */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Palette className="w-8 h-8 mr-3" style={{ color: '#D1006F' }} />
            <h3 className="font-display text-3xl font-semibold text-gray-800">
              Paleta de Cores
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorPalette.map((color, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                  style={{ backgroundColor: color.color }}
                ></div>
                <h4 className="font-semibold text-gray-800 mb-2">{color.name}</h4>
                <p className="text-sm text-gray-600">{color.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Madrinhas */}
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 mr-3" style={{ color: '#D1006F' }} />
              <h3 className="font-display text-3xl font-semibold text-gray-800">
                Para as Madrinhas
              </h3>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl mb-6">
              <Image
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80"
                alt="Vestidos das madrinhas"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#fdf2f8' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#D1006F' }}>Cores Preferidas:</h4>
                <ul className="space-y-2" style={{ color: '#D1006F' }}>
                  <li>• Rosa antigo (cor principal)</li>
                  <li>• Dourado/champagne</li>
                  <li>• Verde sage</li>
                  <li>• Nude/bege</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F5F0E8' }}>
                <h4 className="font-semibold text-gray-800 mb-3">Sugestões de Look:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Vestidos midi ou longos</li>
                  <li>• Tecidos fluidos e elegantes</li>
                  <li>• Acessórios dourados</li>
                  <li>• Sapatos confortáveis (cerimônia em pé)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Padrinhos */}
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <Shirt className="w-8 h-8 mr-3" style={{ color: '#D1006F' }} />
              <h3 className="font-display text-3xl font-semibold text-gray-800">
                Para os Padrinhos
              </h3>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl mb-6">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80"
                alt="Trajes dos padrinhos"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Traje Sugerido:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Terno azul marinho ou cinza escuro</li>
                  <li>• Camisa branca ou azul claro</li>
                  <li>• Gravata ou gravata borboleta</li>
                  <li>• Sapatos sociais pretos ou marrom</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F5F0E8' }}>
                <h4 className="font-semibold text-gray-800 mb-3">Detalhes Importantes:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Gravatas podem ser em tons dourados</li>
                  <li>• Evitar cores muito chamativas</li>
                  <li>• Sapatos confortáveis</li>
                  <li>• Relógio e acessórios discretos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-16 bg-gradient-to-r from-rose-50 to-gold-50 p-8 rounded-lg border border-rose-200">
          <div className="text-center">
            <h4 className="font-display text-2xl font-semibold text-gray-800 mb-4">
              Lembrete Especial
            </h4>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              O mais importante é que vocês se sintam confortáveis e bonitos! 
              Estas são apenas sugestões para harmonizar o visual. Se tiverem dúvidas 
              sobre alguma peça específica, não hesitem em nos perguntar. 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 