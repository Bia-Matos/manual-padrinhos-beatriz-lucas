import Image from 'next/image'
import { MapPin } from 'lucide-react'

export default function ChurchInfo() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cerimônia Religiosa
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/igreja-boa-viagem.jpeg"
                alt="Igreja Boa Viagem - Local da cerimônia"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Church Details */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-3xl font-semibold text-gray-800 mb-4">
                Igreja Boa Viagem
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                A Igreja da Boa Viagem, onde vamos celebrar nosso casamento, leva esse nome por tradição — um símbolo de bênçãos para quem parte em novas jornadas. E é isso que representa para nós: o começo da nossa viagem juntos!
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
                    Rua Sergipe, 175<br />
                    Funcionários, Belo Horizonte – MG<br />
                    CEP: 30130-170<br />
                    <br />
                    <strong>Bairro:</strong> Funcionários (Centro-Sul)<br />
                    <br />
                    <strong>Referência:</strong> Esquina com a Rua Timbiras,<br />
                    próximo ao Parque Municipal e ao Palácio das Artes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 