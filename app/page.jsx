import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex max-h-full w-full flex-col items-center justify-between px-6 py-6">
      <h2 className={`text-[22px] md:text-3xl md:font-bold font-bold mt-6 mb-12`}>
            Dine-In Menu
      </h2>
        <Link href="/breakfast"
        className=" px-1 py-1 mb-3 block text-slate-700 text-sm "
        >
          <div className={`text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6 text-[#c59d5f]`}>

            <p>Breakfast / الفطور</p>
            
          </div> 
        </Link> 
        <Link href="/breakfast" className=" px-1 py-1 block text-slate-700 mb-3 text-sm ">
        <div className={` text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6 text-[#c59d5f]`}>

          <p>Appetizers / المقبلات</p>
        
        </div> 
        </Link> 
        <Link href="/breakfast"
        className=" px-1 py-1 mb-3 block text-slate-700 text-sm "
        >
          <div className={`text-xl md:text-2xl font-semibold flex items-center justify-center gap-4 md:gap-6 text-[#c59d5f]`}>

            <p>Salads / السلطات</p>
             
          </div> 
        </Link> 
 
    </main>
 
  )
}
