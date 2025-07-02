import Image from 'next/image'
import { MapPin } from 'lucide-react'

export default function ReceptionInfo() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Recepção
          </h2>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/garden1.jpeg"
                alt="The Garden Palace - Vista externa"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/garden2.jpeg"
                alt="The Garden Palace - Salão principal"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/garden3.jpeg"
                alt="The Garden Palace - Jardim"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Reception Info */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display text-4xl font-semibold text-gray-800 mb-6">
              The Garden Palace
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Escolhemos este espaço especial para celebrar com vocês a nossa união. Um lugar elegante e aconchegante, perfeito para criar memórias inesquecíveis ao lado de quem mais amamos!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#fdf2f8' }}>
                <MapPin className="w-6 h-6" style={{ color: '#D1006F' }} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                <p className="text-gray-600">
                  [Endereço será adicionado]<br />
                  Belo Horizonte – MG<br />
                  CEP: [CEP será adicionado]
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-800 mb-4">Localização no Mapa</h4>
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8267945789547!2d-43.93667092573944!3d-19.928853681545677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e2c63c28d7%3A0x6b5453f6c296e8d1!2sThe%20Garden%20Palace!5e0!3m2!1spt-BR!2sbr!4v1704067200000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Garden Palace - Localização"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 