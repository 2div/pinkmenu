import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Main Course',
  description: 'https://pinkuwait.com/ Food Menu',

}

export default function MaincourseLayout({ children }) {
  return (
    <div> 
        {children}
    </div>
 
  )
}
