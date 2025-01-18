import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prince Kumar - Portfolio',
  description: 'Portfolio of Prince Kumar, Computer Science Student and NLP Research Intern',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen`}>
        <div className="min-h-screen backdrop-blur-sm">
          {children}
        </div>
      </body>
    </html>
  )
}

