import './globals.css'

export const metadata = {
  title: 'Genesis Obando | Digital Content Portfolio',
  description: 'Bilingual digital content producer with 6+ years of experience in network news and social media strategy.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
