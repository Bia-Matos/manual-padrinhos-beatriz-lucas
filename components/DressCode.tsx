import React from 'react'
import Image from 'next/image'
import { Palette, Users } from 'lucide-react'

export default function DressCode() {
  const colorPalette = [
    { color: '#F24CA5' }, // Rosa claro
    { color: '#FF1493' }, // Rosa médio  
    { color: '#ED2A94' }, // Rosa escuro
  ]

  const correctImages = [
    { src: '/images/tom_correto4.jpeg', alt: 'Tom correto 4' },
    { src: '/images/tom_certo3.webp', alt: 'Tom correto 3' },
    { src: '/images/tom_certo2.jpg', alt: 'Tom correto 2' },
    { src: '/images/tom_certo1.jpg', alt: 'Tom correto 1' },
  ]

  const wrongImages = [
    { src: '/images/tons_errados_3.jpg', alt: 'Tom incorreto 3' },
    { src: '/images/tom_errado2.jpeg', alt: 'Tom incorreto 2' },
    { src: '/images/tom_errado.jpeg', alt: 'Tom incorreto 1' },
    { src: '/images/tons_errados_4.jpg', alt: 'Tom incorreto 4' },
  ]

  const groomsImages = [
    { src: '/images/padrinhos4.jpeg', alt: 'Look padrinho 4' },
    { src: '/images/padrinhos1.jpeg', alt: 'Look padrinho 1' },
    { src: '/images/padrinhos3.jpeg', alt: 'Look padrinho 3' },
    { src: '/images/padrinhos2.jpeg', alt: 'Look padrinho 2' },
  ]

  return (
    <section id="dresscode" className="py-20 px-6" style={{ backgroundColor: '#FAF8E7' }}>
      <div className="container-max section-padding">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8" style={{ color: '#D1006F' }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Queridas Madrinhas
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#D1006F' }}></div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <p className="font-body text-lg text-gray-700 leading-relaxed">
                Vocês me conhecem bem e sabem que não poderia ser outra cor! 💕
                Ver vocês vestidas com a minha cor preferida, no dia mais especial da minha vida, vai ser um presente enorme.
                Tenho certeza de que cada uma ficará maravilhosa e que juntas vamos formar um cenário inesquecível!
              </p>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Palette className="w-8 h-8 mr-3" style={{ color: '#D1006F' }} />
            <h3 className="font-display text-3xl font-semibold text-gray-800">
              Paleta de Cores
            </h3>
          </div>
          
          <div className="flex justify-center gap-8 mb-8">
            {colorPalette.map((color, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-24 h-24 rounded-full shadow-lg border-4 border-white"
                  style={{ backgroundColor: color.color }}
                ></div>
              </div>
            ))}
          </div>
          

        </div>

        {/* Tons Corretos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl font-semibold text-gray-800 mb-4">
              <span style={{ color: '#D1006F' }}>✓</span> Tons Certos
            </h3>
            <p className="font-body text-lg text-gray-600">
              Estes são os tons ideais que combinam perfeitamente com nossa paleta!
            </p>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-6 max-w-5xl mx-auto">
            {correctImages.map((image, index) => (
              <div key={index} className="relative group">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-scroll pb-4 px-4 scrollbar-hide" style={{ overflowX: 'scroll' }}>
              {correctImages.map((image, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: '280px', minWidth: '280px' }}>
                  <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ height: '380px' }}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              👆 Deslize para ver mais imagens
            </p>
          </div>
        </div>

        {/* Tons Incorretos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl font-semibold text-gray-800 mb-4">
              <span style={{ color: '#D1006F' }}>✗</span> Tons Errados
            </h3>
            <p className="font-body text-lg text-gray-600">
              Evitem tons muito escuros que fujam dessa vibe Barbie pink que amo! Também peço cuidado com rosas muito claros. Ah, e por favor: nada de lilás, roxo ou vermelho! 💗
            </p>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-6 max-w-5xl mx-auto">
            {wrongImages.map((image, index) => (
              <div key={index} className="relative group">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-scroll pb-4 px-4 scrollbar-hide" style={{ overflowX: 'scroll' }}>
              {wrongImages.map((image, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: '280px', minWidth: '280px' }}>
                  <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ height: '380px' }}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              👆 Deslize para ver mais imagens
            </p>
          </div>
        </div>

        {/* Dicas */}
        <div className="mt-16 p-8 rounded-lg border-l-4" style={{ backgroundColor: '#fdf2f8', borderLeftColor: '#D1006F' }}>
          <div className="text-center">
            <h4 className="font-display text-2xl font-semibold mb-4" style={{ color: '#D1006F' }}>
              Atenção
            </h4>
            <p className="font-body text-lg leading-relaxed max-w-4xl mx-auto" style={{ color: '#D1006F' }}>
              Madrinhas, se atentem porque a cerimônia vai acontecer na igreja, então cuidado com decotes e fendas muito grandes! Além disso, a festa é em um lugar super verde e ao ar livre, vestidos pesados e com muitas pedrarias podem não combinar tanto! Fora isso, fiquem à vontade para escolher o estilo do seu vestido! 💕
            </p>
          </div>
        </div>

        {/* Seção dos Padrinhos */}
        <div className="mt-20 pt-16 border-t-2" style={{ borderTopColor: '#D1006F' }}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 mr-3" style={{ color: '#D1006F' }} />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                E os Padrinhos?
              </h2>
            </div>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Vocês também são fundamentais nesse dia! Aqui estão as orientações para que fiquem elegantes e alinhados com o estilo do casamento.
            </p>
          </div>

          {/* Fotos de Referência */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl font-semibold text-gray-800 mb-4">
                <span style={{ color: '#D1006F' }}>👔</span> Looks Ideais
              </h3>
              <p className="font-body text-lg text-gray-600">
                Estes são os estilos que combinam perfeitamente com nossa cerimônia!
              </p>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-4 gap-6 max-w-5xl mx-auto">
              {groomsImages.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={`group-hover:scale-105 transition-transform duration-300 ${
                        image.src.includes('padrinhos3') ? 'object-contain' : 'object-cover'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-scroll pb-4 px-4 scrollbar-hide" style={{ overflowX: 'scroll' }}>
                {groomsImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0" style={{ width: '280px', minWidth: '280px' }}>
                    <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ height: '380px' }}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className={`object-cover ${
                          image.src.includes('padrinhos3') ? 'object-contain' : 'object-cover'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                👆 Deslize para ver mais imagens
              </p>
            </div>
          </div>

          {/* Orientações */}
          <div className="mt-16 p-8 rounded-lg border-l-4" style={{ backgroundColor: '#fdf2f8', borderLeftColor: '#D1006F' }}>
            <div className="text-center">
              <h4 className="font-display text-2xl font-semibold mb-6" style={{ color: '#D1006F' }}>
                Dress Code Masculino
              </h4>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-4 text-lg leading-relaxed font-body" style={{ color: '#D1006F' }}>
                  <p><strong>Terno:</strong> Preto</p>
                  <p><strong>Camisa:</strong> Branca</p>
                  <p><strong>Sapatos:</strong> Tênis ou sapatênis</p>
                </div>
                <p className="font-body mt-6 text-lg leading-relaxed" style={{ color: '#D1006F' }}>
                  Não usaremos gravata, no dia entregaremos para vocês uma lapela da cor do vestido das madrinhas! 💕
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 