import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fabro Gabriel Software Developer',
  description: 'Designing the Future, Pixel by Pixel - Where Creativity Meets Functionality!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
