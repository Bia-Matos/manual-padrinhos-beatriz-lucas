import React from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

export default function ChurchInfo() {
  return (
    <section id="church" className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cerimônia Religiosa
          </h2>
        </div>

        {/* Image Full Width */}
        <div className="mb-12">
          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/igreja-boa-viagem.jpeg"
              alt="Igreja Boa Viagem - Local da cerimônia"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Church Details */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-semibold text-gray-800 mb-4">
              Igreja Boa Viagem
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              A Igreja da Boa Viagem, onde vamos celebrar nosso casamento, leva esse nome por tradição — um símbolo de bênçãos para quem parte em novas jornadas. E é isso que representa para nós: o começo da nossa viagem juntos!
            </p>
          </div>

          {/* Details Cards */}
          <div className="grid md:grid-cols-2 gap-6">
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

            {/* Google Maps */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-800 mb-4">Localização no Mapa</h4>
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8267945789547!2d-43.93667092573944!3d-19.928853681545677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e2c63c28d7%3A0x6b5453f6c296e8d1!2sIgreja%20da%20Boa%20Viagem!5e0!3m2!1spt-BR!2sbr!4v1704067200000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Igreja da Boa Viagem - Localização"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 