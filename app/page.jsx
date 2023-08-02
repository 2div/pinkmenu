import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex max-h-full w-full flex-col items-center justify-between px-6 py-6 ">
      <h2 className={`text-3xl md:text-3xl md:font-bold font-bold mt-6 mb-12`}>
            Dine-In Menu
      </h2>
        <Link href="/breakfast"
        className=" px-1 py-1 mb-3 block text-slate-700 "
        >
          <div className='text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6 text-[#bb9965] hover:text-[#b48f57]'>

            <p>Breakfast / الفطور</p>
            
          </div> 
        </Link> 
        <Link href="/appetizers" className=" px-1 py-1 block text-slate-700 mb-3 text-sm ">
        <div className='text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6 mt-2 text-[#bb9965] hover:text-[#b48f57]'>

          <p>Appetizers / المقبلات</p>
        
        </div> 
        </Link> 
        <Link href="/salads"
        className=" px-1 py-1 mb-3 block text-slate-700 text-sm "
        >
          <div className='text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6 mt-2 text-[#bb9965] hover:text-[#b48f57]'>

            <p>Salads / السلطات</p>
             
          </div> 
        </Link> 
        <Link href="/burgers"
        className=" px-1 py-1 mb-3 block text-slate-700 text-sm "
        >
          <div className='text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6 mt-2 text-[#bb9965] hover:text-[#b48f57]'>

            <p>Burgers / البرجر</p>
             
          </div> 
        </Link> 
        <Link href="/pizza"
        className=" px-1 py-1 mb-3 block text-slate-700 text-sm "
        >
          <div className='text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6 mt-2 text-[#bb9965] hover:text-[#b48f57]'>

            <p>Pizza / بيتزا</p>
             
          </div> 
        </Link> 
        <Link href="/maincourse"
        className=" px-1 py-1 mb-3 block text-slate-700 text-sm "
        >
          <div className='text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6 mt-2 text-[#bb9965] hover:text-[#b48f57]'>

            <p>Main Course / أطباق رئيسية</p>
             
          </div> 
        </Link> 
        <Link href="/desserts"
        className=" px-1 py-1 mb-3 block text-slate-700 text-sm"
        >
          <div className='text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6 mt-2 text-[#bb9965] hover:text-[#b48f57]'>

            <p>Desserts / حلويات</p>
             
          </div> 
        </Link> 
        <Link href="/hotdrinks"
        className=" px-1 py-1 mb-3 block text-slate-700 text-sm "
        >
          <div className='text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6 mt-2 text-[#bb9965] hover:text-[#b48f57]'>

            <p>Hot Drinks / مشروبات ساخنه</p>
             
          </div> 
        </Link> 
 
    </main>
 
  )
}
