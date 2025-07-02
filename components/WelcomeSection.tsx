import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
              Queridos Padrinhos
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Vocês são pessoas muito especiais em nossas vidas, e não poderíamos 
                imaginar nosso casamento sem a presença de cada um de vocês ao nosso lado.
              </p>
              
              <p>
                Como padrinhos e madrinhas, vocês são testemunhas do nosso amor e 
                prometem nos apoiar nesta nova jornada que estamos começando juntos. 
                É uma honra tê-los conosco neste momento tão importante.
              </p>
              
              <p>
                Este manual foi criado com muito carinho para que vocês tenham todas 
                as informações necessárias sobre nosso grande dia. Esperamos que seja 
                útil e que torne tudo ainda mais especial!
              </p>
            </div>
            
            <div className="p-6 rounded-lg border-l-4" style={{ backgroundColor: '#fdf2f8', borderLeftColor: '#D1006F' }}>
              <p className="italic" style={{ color: '#D1006F' }}>
                "Um casamento não é apenas a união de duas pessoas, mas a celebração 
                de uma comunidade de amor que nos cerca e nos apoia."
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80"
                alt="Casal feliz"
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