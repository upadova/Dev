import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppProvider } from '@/data/context/AppContext';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Template',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <AppProvider>
        <body className={inter.className}>{children}</body>
      </AppProvider>
    </html>
  )
}