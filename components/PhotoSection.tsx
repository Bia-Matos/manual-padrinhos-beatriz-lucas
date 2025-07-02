import Image from 'next/image'
import { Camera, Heart } from 'lucide-react'

export default function PhotoSection() {
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Casal sorrindo',
      className: 'md:col-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1519741497674-61f9bb2bab2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Momento romântico',
      className: ''
    },
    {
      src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Ensaio pré-wedding',
      className: ''
    },
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Casal na natureza',
      className: 'md:col-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Momento especial',
      className: 'md:col-span-1'
    },
    {
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Amor verdadeiro',
      className: 'md:col-span-1'
    }
  ]

  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-8 h-8 mr-3" style={{ color: '#D1006F' }} />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
              Nossa História
            </h2>
            <Heart className="w-8 h-8 ml-3 fill-current" style={{ color: '#D1006F' }} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alguns momentos especiais da nossa jornada juntos. Mal podemos esperar 
            para criar novas memórias com todos vocês no nosso grande dia!
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {photos.map((photo, index) => (
            <div key={index} className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${photo.className}`}>
              <div className="relative h-64 md:h-80">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Love Story Text */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-rose-50 to-gold-50 p-8 md:p-12 rounded-lg shadow-lg">
            <h3 className="font-display text-3xl font-semibold text-gray-800 mb-6">
              Como Tudo Começou...
            </h3>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Nos conhecemos em 2019, em uma tarde ensolarada no parque da cidade. 
                O que começou como uma conversa casual se transformou no amor da nossa vida.
              </p>
              
              <p>
                Três anos depois, em uma viagem romântica para as montanhas, Lucas 
                pediu Beatriz em casamento sob um céu estrelado. Foi o momento mais 
                mágico das nossas vidas!
              </p>
              
              <p>
                Agora, estamos prontos para dar o próximo passo nesta jornada incrível, 
                e não poderíamos estar mais felizes em ter vocês, nossos queridos amigos 
                e familiares, para celebrar conosco.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-2">
              <Heart className="w-6 h-6 fill-current animate-pulse" style={{ color: '#D1006F' }} />
              <span className="font-display text-xl font-semibold" style={{ color: '#D1006F' }}>
                Beatriz & Lucas
              </span>
              <Heart className="w-6 h-6 fill-current animate-pulse" style={{ color: '#D1006F' }} />
            </div>
          </div>
        </div>

        {/* Instagram Hashtag */}
        <div className="mt-16 text-center">
          <div className="text-white p-8 rounded-lg" style={{ backgroundColor: '#D1006F' }}>
            <h4 className="font-display text-2xl font-semibold mb-4">
              Marque suas fotos!
            </h4>
            <p className="text-lg mb-4">
              Não esqueçam de usar nossa hashtag oficial nas redes sociais:
            </p>
            <div className="bg-white px-6 py-3 rounded-full inline-block font-mono text-xl font-semibold" style={{ color: '#D1006F' }}>
              #BeatrizELucas2026
            </div>
            <p className="text-sm text-pink-100 mt-4">
              Assim poderemos ver e compartilhar todos os momentos especiais! 📸✨
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 