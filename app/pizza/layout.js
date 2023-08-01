import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Pizza Menu',
  description: 'https://pinkuwait.com/ Food Menu',

}

export default function PizzaLayout({ children }) {
  return (
    <div> 
        {children}
    </div>
 
  )
}
