import React from 'react'
import { Clock, Calendar, MapPin, Camera, Utensils, Music, CalendarDays } from 'lucide-react'

export default function Timeline() {
  const timelineEvents = [
    {
      time: '14:00',
      title: 'Preparativos',
      description: 'Início dos preparativos dos noivos',
      icon: Calendar,
      location: 'Casa da noiva',
      color: 'bg-rose-100 text-rose-600'
    },
    {
      time: '15:30',
      title: 'Encontro dos Padrinhos',
      description: 'Reunião e fotos com os padrinhos',
      icon: Camera,
      location: 'Igreja São Francisco',
      color: 'bg-gold-100 text-gold-600'
    },
    {
      time: '16:00',
      title: 'Chegada dos Convidados',
      description: 'Recepção dos convidados na igreja',
      icon: MapPin,
      location: 'Igreja São Francisco',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      time: '16:30',
      title: 'Cerimônia Religiosa',
      description: 'Início da cerimônia de casamento',
      icon: Calendar,
      location: 'Igreja São Francisco',
      color: 'bg-rose-100 text-rose-600'
    },
    {
      time: '17:30',
      title: 'Sessão de Fotos',
      description: 'Fotos oficiais com família e padrinhos',
      icon: Camera,
      location: 'Jardins da igreja',
      color: 'bg-green-100 text-green-600'
    },
    {
      time: '18:30',
      title: 'Coquetel de Boas-Vindas',
      description: 'Drinks e aperitivos para os convidados',
      icon: Utensils,
      location: 'Salão de festas',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      time: '20:00',
      title: 'Jantar',
      description: 'Jantar servido aos convidados',
      icon: Utensils,
      location: 'Salão principal',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      time: '22:00',
      title: 'Festa e Dança',
      description: 'Música, dança e muita diversão!',
      icon: Music,
      location: 'Pista de dança',
      color: 'bg-pink-100 text-pink-600'
    }
  ]

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FAF8E7' }}>
      <div className="container-max section-padding">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <CalendarDays className="w-8 h-8" style={{ color: '#D1006F' }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cronograma do Dia
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#D1006F' }}></div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <p className="font-body text-lg text-gray-700 leading-relaxed">
                Para que tudo transcorra perfeitamente, preparamos um cronograma detalhado 
                com todos os momentos importantes do nosso grande dia.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#D1006F' }}></div>

            {/* Timeline Events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon
                return (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10" style={{ backgroundColor: '#fdf2f8', color: '#D1006F' }}>
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Event Content */}
                    <div className="ml-8 bg-white rounded-lg shadow-md p-6 flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="font-display text-2xl font-semibold text-gray-800">
                          {event.title}
                        </h3>
                        <div className="flex items-center font-semibold text-lg" style={{ color: '#D1006F' }}>
                          <Clock className="w-5 h-5 mr-2" />
                          {event.time}
                        </div>
                      </div>
                      
                      <p className="font-body text-gray-600 text-lg mb-3 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="font-body text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>


      </div>
    </section>
  )
} 