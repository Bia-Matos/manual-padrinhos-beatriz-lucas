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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased text-gray-800" style={{ backgroundColor: '#F8F5E8', fontFamily: "'Inter', sans-serif" }}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
} 