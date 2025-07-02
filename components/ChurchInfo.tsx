import Image from 'next/image'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function ChurchInfo() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cerimônia Religiosa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa cerimônia acontecerá em um local muito especial para nós. 
            Aqui estão todas as informações que vocês precisam saber.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1520637836862-4d197d17c50a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80"
                alt="Igreja da cerimônia"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Church Details */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-3xl font-semibold text-gray-800 mb-4">
                Igreja São Francisco
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Escolhemos esta igreja por sua beleza e significado especial em nossas vidas. 
                É onde nossos pais se casaram e onde construímos nossa fé juntos.
              </p>
            </div>

            {/* Details Cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#fdf2f8' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#D1006F' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Rua das Flores, 123<br />
                    Centro - São Paulo, SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#fdf2f8' }}>
                  <Clock className="w-6 h-6" style={{ color: '#D1006F' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Horário</h4>
                  <p className="text-gray-600">
                    16:00h - Chegada dos convidados<br />
                    16:30h - Início da cerimônia<br />
                    17:30h - Término previsto
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#fdf2f8' }}>
                  <Phone className="w-6 h-6" style={{ color: '#D1006F' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Contato</h4>
                  <p className="text-gray-600">
                    Padre João Silva<br />
                    (11) 9999-8888<br />
                    igreja.saofrancisco@email.com
                  </p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-gold-50 p-6 rounded-lg border-l-4 border-gold-500">
              <p className="text-gold-700">
                <strong>Importante:</strong> Pedimos que cheguem com 30 minutos de antecedência 
                para que possamos fazer as fotos dos padrinhos antes da cerimônia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 