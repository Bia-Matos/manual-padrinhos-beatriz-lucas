import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Manual dos Padrinhos - Casamento B&L',
  description: 'Um guia especial para nossos queridos padrinhos e madrinhas',
  keywords: 'casamento, padrinhos, madrinhas, manual, wedding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased text-gray-800" style={{ backgroundColor: '#F5F0E8' }}>
        <Header />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  )
} 