import React from 'react'
import Image from 'next/image'
import { Palette, Users } from 'lucide-react'

export default function DressCode() {
  const colorPalette = [
    { color: '#F24CA5' }, // Rosa claro
    { color: '#FF1493' }, // Rosa médio  
    { color: '#ED2A94' }, // Rosa escuro
  ]

  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 mr-3" style={{ color: '#D1006F' }} />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
              Queridas Madrinhas
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vocês me conhecem bem e sabem que não poderia ser outra cor! 💕
            Ver vocês vestidas com a minha cor preferida, no dia mais especial da minha vida, vai ser um presente enorme.
            Tenho certeza de que cada uma ficará maravilhosa e que juntas vamos formar um cenário inesquecível!
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
            <p className="text-lg text-gray-600">
              Estes são os tons ideais que combinam perfeitamente com nossa paleta!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tom_certo1.jpg"
                  alt="Tom correto 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tom_certo2.jpg"
                  alt="Tom correto 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tom_certo3.webp"
                  alt="Tom correto 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tom_correto4.jpeg"
                  alt="Tom correto 4"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tons Incorretos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl font-semibold text-gray-800 mb-4">
              <span style={{ color: '#D1006F' }}>✗</span> Tons Errados
            </h3>
            <p className="text-lg text-gray-600">
              Evitem tons muito escuros que fujam dessa vibe Barbie pink que amo! Também peço cuidado com rosas muito claros. Ah, e por favor: nada de lilás, roxo ou vermelho! 💗
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tom_errado.jpeg"
                  alt="Tom incorreto 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tom_errado2.jpeg"
                  alt="Tom incorreto 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tons_errados_3.jpg"
                  alt="Tom incorreto 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tons_errados_4.jpg"
                  alt="Tom incorreto 4"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dicas */}
        <div className="mt-16 p-8 rounded-lg border-l-4" style={{ backgroundColor: '#fdf2f8', borderLeftColor: '#D1006F' }}>
          <div className="text-center">
            <h4 className="font-display text-2xl font-semibold mb-4" style={{ color: '#D1006F' }}>
              Atenção
            </h4>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto" style={{ color: '#D1006F' }}>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vocês também são fundamentais nesse dia! Aqui estão as orientações para que fiquem elegantes e alinhados com o estilo do casamento.
            </p>
          </div>

          {/* Fotos de Referência */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl font-semibold text-gray-800 mb-4">
                <span style={{ color: '#D1006F' }}>👔</span> Looks Ideais
              </h3>
              <p className="text-lg text-gray-600">
                Estes são os estilos que combinam perfeitamente com nossa cerimônia!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              <div className="relative group">
                <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/padrinhos1.jpeg"
                    alt="Look padrinho 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/padrinhos2.jpeg"
                    alt="Look padrinho 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/padrinhos3.jpeg"
                    alt="Look padrinho 3"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/padrinhos4.jpeg"
                    alt="Look padrinho 4"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Orientações */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#fdf2f8' }}>
                <h4 className="font-semibold mb-4 text-lg" style={{ color: '#D1006F' }}>Dress Code Masculino:</h4>
                <ul className="space-y-3 text-sm md:text-base" style={{ color: '#D1006F' }}>
                  <li>• <strong>Terno:</strong> Preto</li>
                  <li>• <strong>Camisa:</strong> Branca</li>
                  <li>• <strong>Sapatos:</strong> Tênis ou sapatênis</li>
                </ul>
                <p className="mt-4 text-sm md:text-base" style={{ color: '#D1006F' }}>
                  Não usaremos gravata, no dia entregaremos para vocês uma lapela da cor do vestido das madrinhas!
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 