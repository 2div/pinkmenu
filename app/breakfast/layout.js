import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Breakfast Menu',
  description: 'https://pinkuwait.com/ Food Menu',

}

export default function BreakfastLayout({ children }) {
  return (
    <div>

        {children}
    </div>
 
  )
}
