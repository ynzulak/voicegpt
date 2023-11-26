import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CloneGPT',
  description: 'React application that is ChatGPT clone based on OpenAI API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/768px-ChatGPT_logo.svg.png" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
