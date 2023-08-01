import Link from 'next/link'
import { BsArrowReturnLeft } from 'react-icons/bs';


export const metadata = {
  title: 'Hot Drinks',
  description: 'https://pinkuwait.com/ Food Menu',

}

export default function HotdrinksLayout({ children }) {
  return (
    <div>
        <div className='flex justify-center items-center my-8'>
        <Link href="/hotdrinks" className=" px-1 py-1 mb-3 block text-slate-700 text-sm " >
        <div className={` flex justify-normal items-center text-xl md:text-2xl font-semibold md:gap-6
            text-[#c59d5f] border rounded-md border-1 bg-slate-200 py-1 px-2 cursor-pointer hover:bg-slate-200 hover:shadow-md`}>
            <BsArrowReturnLeft/> 
            <p className='pl-2'>Back / الرجوع</p>
        </div> 
        </Link> 
       
        </div>
        {children}
    </div>
 
  )
}
