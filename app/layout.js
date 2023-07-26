import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pinkuwait Los Angeles Food Menu',
  description: 'https://pinkuwait.com/ Food Menu',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex flex-col items-center justify-center mt-12">
        <Link href="/">
          <Image
           
            src="/pinklogo.svg"
            alt="Pinkuwait Logo"
            width={180}
            height={37}
            priority
          />
        </Link>
        
        {children}
      </div>
      </body>
    </html>
  )
}
