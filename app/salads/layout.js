import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Salads Menu',
  description: 'https://pinkuwait.com/ Food Menu',

}

export default function SaladsLayout({ children }) {
  return (
    <div>
         
        {children}
    </div>
 
  )
}
