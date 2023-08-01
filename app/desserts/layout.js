import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Desserts',
  description: 'https://pinkuwait.com/ Food Menu',

}

export default function DessertsLayout({ children }) {
  return (
    <div> 
        {children}
    </div>
 
  )
}
