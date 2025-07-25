import Image from 'next/image'
import { MapPin } from 'lucide-react'

export default function ReceptionInfo() {
  return (
    <section id="reception" className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
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

          <div className="max-w-2xl mx-auto mb-12">
            {/* Address Card */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#fdf2f8' }}>
                <MapPin className="w-6 h-6" style={{ color: '#D1006F' }} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                <p className="text-gray-600">
                  R. Conde de Linhares, 292<br />
                  Cidade Jardim, Belo Horizonte – MG<br />
                  CEP: 30380-030
                </p>
              </div>
            </div>
          </div>

          {/* Route Map */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-gray-800 mb-4">Rota: Igreja → Recepção</h4>
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15004.826693415892!2d-43.95!3d-19.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0xa699de9d8b2e3d%3A0x4b5453f6c2dde8d1!2sRua%20Sergipe%2C%20175%20-%20Funcionários%2C%20Belo%20Horizonte%20-%20MG%2C%2030130-170!3m2!1d-19.928853681545677!2d-43.93667092573944!4m5!1s0xa699e2c63c28d7%3A0x6b5453f6c296e8d1!2sR.%20Conde%20de%20Linhares%2C%20292%20-%20Cidade%20Jardim%2C%20Belo%20Horizonte%20-%20MG%2C%2030380-030!3m2!1d-19.936!2d-43.949!5e0!3m2!1spt-BR!2sbr!4v1704067200000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rota da Igreja para a Recepção"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 