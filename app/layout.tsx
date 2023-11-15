import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/lib/providers'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <UserProvider>
          <body className={inter.className}>{children}</body>
        </UserProvider>

      </html>
    </Providers>
  )
}
