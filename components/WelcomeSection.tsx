import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <section id="welcome" className="py-16 px-6" style={{ backgroundColor: '#FAF8E7' }}>
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-cursive text-4xl md:text-5xl text-gray-800" style={{ fontSize: '56px' }}>
              Queridos Padrinhos,
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-body">
              <p>
                Que alegria ter vocês conosco em um dos momentos mais especiais das nossas vidas!
                Cada um de vocês tem um lugar único na nossa história, e é impossível imaginar esse dia sem sua presença e carinho ao nosso lado.
              </p>
              
              <p>
                Como padrinhos e madrinhas, vocês são testemunhas do nosso amor e prometem nos apoiar nesta nova jornada que estamos começando juntos. É uma honra tê-los conosco neste momento tão importante.
              </p>
              
              <p>
                Criamos esse manual com muito amor para que vocês tenham todas as informações e se sintam ainda mais parte desse sonho! Esperamos que ele ajude vocês!
              </p>
            </div>
            
            <div className="p-6 rounded-lg border-l-4" style={{ backgroundColor: '#fdf2f8', borderLeftColor: '#D1006F' }}>
              <p className="font-body italic" style={{ color: '#D1006F' }}>
                "O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem. Por isso existem momentos inesquecíveis, coisas inexplicáveis e pessoas incomparáveis."
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/casal.jpeg"
                alt="Beatriz & Lucas - Foto do casal"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-60" style={{ backgroundColor: '#D1006F' }}></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-40" style={{ backgroundColor: '#D1006F' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
} 