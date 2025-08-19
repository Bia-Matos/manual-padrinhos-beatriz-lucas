import React from 'react'
import { MapPin, Clock, Church } from 'lucide-react'

export default function ChurchInfo() {
  return (
    <section id="church" className="py-20 px-6" style={{ backgroundColor: '#FAF8E7' }}>
      <div className="container-max section-padding">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Church className="w-8 h-8" style={{ color: '#D1006F' }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cerimônia Religiosa
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#D1006F' }}></div>
        </div>

        {/* Church Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Igreja da Boa Viagem
            </h3>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <p className="font-body text-lg text-gray-700 leading-relaxed">
                A Igreja da Boa Viagem, onde vamos celebrar nosso casamento, leva esse nome por tradição — um símbolo de bênçãos para quem parte em novas jornadas. E é isso que representa para nós: o começo da nossa viagem juntos!
              </p>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Address Card */}
          <div className="rounded-2xl shadow-xl border border-white/50 overflow-hidden" style={{ backgroundColor: '#fdf2f8' }}>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-white shadow-md">
                  <MapPin className="w-6 h-6" style={{ color: '#D1006F' }} />
                </div>
                <h4 className="font-display text-xl font-semibold text-gray-800 ml-4">Endereço</h4>
              </div>
              <div className="space-y-3">
                <p className="font-body text-gray-700">
                  <strong>Rua Sergipe, 175</strong><br />
                  Funcionários, Belo Horizonte – MG<br />
                  CEP: 30130-170
                </p>
                <div className="pt-3 border-t border-pink-200">
                  <p className="font-body text-sm text-gray-600">
                    <strong>Bairro:</strong> Funcionários (Centro-Sul)<br />
                    <strong>Referência:</strong> Esquina com a Rua Timbiras, próximo ao Parque Municipal e ao Palácio das Artes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Time Card */}
          <div className="rounded-2xl shadow-xl border border-white/50 overflow-hidden" style={{ backgroundColor: '#fdf2f8' }}>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-white shadow-md">
                  <Clock className="w-6 h-6" style={{ color: '#D1006F' }} />
                </div>
                <h4 className="font-display text-xl font-semibold text-gray-800 ml-4">Horário</h4>
              </div>
              <div className="text-center py-4">
                <p className="font-display text-3xl font-bold" style={{ color: '#D1006F' }}>15:30</p>
                <p className="font-body text-gray-600 mt-2">Início da Cerimônia</p>
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="font-body text-sm text-gray-700">
                    <strong>Chegada dos convidados:</strong> 15:00<br />
                    <strong>Início da cerimônia:</strong> 15:30<br />
                    <br />
                    <strong>Padrinhos:</strong> Horário será definido e avisado com antecedência pelo cerimonial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="rounded-2xl shadow-xl border border-white/50 overflow-hidden lg:col-span-1" style={{ backgroundColor: '#fdf2f8' }}>
            <div className="p-6">
              <h4 className="font-display text-xl font-semibold text-gray-800 mb-4 text-center">Localização</h4>
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
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