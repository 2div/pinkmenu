import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Breakfast Menu',
  description: 'https://pinkuwait.com/ Food Menu',

}

export default function BreakfastLayout({ children }) {
  return (
    <div>
         <Link href="/breakfast" >
          <div className={`flex justify-center items-center gap-1  text-[20px] md:text-3xl md:font-bold font-bold mt-12 mb-6 bg-rose-200
             border-slate-300 py-1 px-2 cursor-pointer hover:bg-rose-200  rounded-sm hover:shadow-sm hover:outline-none`}>
            <p>Appetizers Menu</p>
            <p>/</p>
            <p>قائمة المقبلات</p>
          </div>  
        </Link>
        <div className='flex justify-center items-center'>
        <Link href="/" className=" px-1 py-1 mb-3 block text-slate-700 text-sm " >
        <div className={` flex justify-normal items-center text-xl md:text-2xl font-semibold md:gap-6
                     text-[#c59d5f] border rounded-md border-1 bg-slate-200 py-1 px-2 cursor-pointer hover:bg-slate-200 hover:shadow-md`}>
            <p>Back / الرجوع</p>
        </div> 
        </Link> 
        {/* <Link href="/appetizers" className=" px-1 py-1 block text-slate-700 mb-3 text-sm ">
        <div className={` text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6 text-[#c59d5f]`}>
        <p>Main/الرئيسيه</p>   
        </div> 
        </Link>  */}
        </div>
        {children}
    </div>
 
  )
}
