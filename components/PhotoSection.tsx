import React from 'react'
import Image from 'next/image'
import { Camera, Heart } from 'lucide-react'

export default function PhotoSection() {
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Casal sorrindo',
      className: 'md:col-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1519741497674-61f9bb2bab2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Momento romântico',
      className: ''
    },
    {
      src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Ensaio pré-wedding',
      className: ''
    },
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Casal na natureza',
      className: 'md:col-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Momento especial',
      className: 'md:col-span-1'
    },
    {
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      alt: 'Amor verdadeiro',
      className: 'md:col-span-1'
    }
  ]

  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="container-max section-padding">
        {/* Empty section - can be removed if not needed */}
      </div>
    </section>
  )
} 