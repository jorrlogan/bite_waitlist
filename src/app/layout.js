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
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZWF0C60540"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-ZWF0C60540');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
