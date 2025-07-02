import { Phone, Mail, Car, Gift, AlertCircle, Wifi } from 'lucide-react'

export default function ImportantInfo() {
  const contacts = [
    {
      name: 'Beatriz (Noiva)',
      phone: '(11) 99999-1111',
      email: 'beatriz@email.com',
      role: 'Para dúvidas sobre o casamento'
    },
    {
      name: 'Lucas (Noivo)',
      phone: '(11) 99999-2222', 
      email: 'lucas@email.com',
      role: 'Para questões gerais'
    },
    {
      name: 'Ana (Cerimonialista)',
      phone: '(11) 99999-3333',
      email: 'ana.eventos@email.com',
      role: 'Coordenação do evento'
    }
  ]

  const importantPoints = [
    {
      icon: Car,
      title: 'Estacionamento',
      description: 'Estacionamento gratuito disponível no local. Chegada sugerida com 30 min de antecedência.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Gift,
      title: 'Lista de Presentes',
      description: 'Nossa lista está disponível nas Lojas Americanas e também no PIX: casamento.bl@email.com',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Wifi,
      title: 'Wi-Fi no Local',
      description: 'Rede: CasamentoBL | Senha: amor2024 (para compartilhar fotos!)',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: AlertCircle,
      title: 'Crianças',
      description: 'Teremos um espaço kids supervisionado durante a festa. Comuniquem se trarão crianças.',
      color: 'bg-orange-100 text-orange-600'
    }
  ]

  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Informações Importantes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Algumas informações adicionais que podem ser úteis para vocês no dia do casamento.
          </p>
        </div>

        {/* Important Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {importantPoints.map((point, index) => {
            const IconComponent = point.icon
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: '#fdf2f8', color: '#D1006F' }}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-gray-800 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contacts Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl font-semibold text-gray-800 mb-4">
              Contatos Importantes
            </h3>
            <p className="text-gray-600">
              Para qualquer dúvida ou emergência, não hesitem em entrar em contato:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fdf2f8' }}>
                  <Phone className="w-8 h-8" style={{ color: '#D1006F' }} />
                </div>
                
                <h4 className="font-semibold text-gray-800 text-lg mb-2">
                  {contact.name}
                </h4>
                
                <p className="text-sm text-gray-600 mb-3">
                  {contact.role}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contact.phone}</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contact.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Info */}
        <div className="mt-12 p-8 rounded-lg border-l-4" style={{ backgroundColor: '#fdf2f8', borderLeftColor: '#D1006F' }}>
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#D1006F' }} />
            <div>
              <h4 className="font-display text-xl font-semibold mb-3" style={{ color: '#D1006F' }}>
                Em Caso de Emergência
              </h4>
              <div className="space-y-2" style={{ color: '#D1006F' }}>
                <p>• <strong>SAMU:</strong> 192</p>
                <p>• <strong>Bombeiros:</strong> 193</p>
                <p>• <strong>Segurança do Local:</strong> (11) 99999-0000</p>
                <p>• <strong>Hospital mais próximo:</strong> Hospital São José - 2km do local</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Info */}
        <div className="mt-8 bg-gold-50 border-l-4 border-gold-500 p-8 rounded-lg">
          <h4 className="font-display text-xl font-semibold text-gold-800 mb-3">
            Previsão do Tempo
          </h4>
          <p className="text-gold-700">
            <strong>Junho em São Paulo:</strong> Temperatura média de 15-20°C. 
            Recomendamos levar um casaquinho para o final da noite. 
            Baixa probabilidade de chuva, mas o local é coberto! ☀️
          </p>
        </div>
      </div>
    </section>
  )
} 