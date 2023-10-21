import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bite',
  description: 'Bite waitlist',
  icon: 'https://versity-images.s3.us-west-2.amazonaws.com/bite-logo-red.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
