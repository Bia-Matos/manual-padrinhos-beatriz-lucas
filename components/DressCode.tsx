import React from 'react'
import Image from 'next/image'
import { Palette, Users } from 'lucide-react'

export default function DressCode() {
  const colorPalette = [
    { color: '#F24CA5' }, // Rosa claro
    { color: '#ED2A94' }, // Rosa médio  
    { color: '#FF1493' }, // Rosa escuro
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
              ✅ Tons Perfeitos
            </h3>
            <p className="text-lg text-gray-600">
              Estes são os tons ideais que combinam perfeitamente com nossa paleta!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative group">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1566479179817-c7a30ef9f419?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tom correto 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tom correto 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1582032700751-8ca3e16beab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tom correto 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
              ❌ Tons a Evitar
            </h3>
            <p className="text-lg text-gray-600">
              Estes tons podem não harmonizar com nossa paleta de cores
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative group opacity-75">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tom incorreto 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 grayscale"
                />
                <div className="absolute inset-0 bg-red-500 bg-opacity-20"></div>
              </div>
            </div>
            
            <div className="relative group opacity-75">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1566479179817-c7a30ef9f419?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tom incorreto 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 grayscale"
                />
                <div className="absolute inset-0 bg-red-500 bg-opacity-20"></div>
              </div>
            </div>
            
            <div className="relative group opacity-75">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tom incorreto 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 grayscale"
                />
                <div className="absolute inset-0 bg-red-500 bg-opacity-20"></div>
              </div>
            </div>
            
            <div className="relative group opacity-75">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1566479179817-c7a30ef9f419?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tom incorreto 4"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 grayscale"
                />
                <div className="absolute inset-0 bg-red-500 bg-opacity-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-16 p-8 rounded-lg border-l-4" style={{ backgroundColor: '#fdf2f8', borderLeftColor: '#D1006F' }}>
          <div className="text-center">
            <h4 className="font-display text-2xl font-semibold mb-4" style={{ color: '#D1006F' }}>
              Com Amor, para Vocês ✨
            </h4>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto" style={{ color: '#D1006F' }}>
              O mais importante é que vocês se sintam lindas e confortáveis! Estas são apenas 
              sugestões para harmonizar as fotos. Se tiverem dúvidas sobre alguma peça específica, 
              não hesitem em nos chamar. Vocês são especiais demais! 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 