import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h2 className={`mb-3 text-[22px] md:text-3xl md:font-bold font-bold mt-12`}>
            Dine-In Menu
    </h2>
    <main className="flex max-h-full w-full flex-col items-center justify-between px-12 py-6">
      
 
        <Link href="/breakfast"
        className="rounded-lg border border-gray-800 hover:border-gray-600 px-4 py-4 block w-[250px] md:w-[300px]
        transition-colors hover:bg-gray-100 text-slate-700 
          hover:dark:border-neutral-700 mb-5"
        >
          <div className={`text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6`}>

            <p>BREAKFAST</p>
            <p>/</p>
            <p>الفطور</p>
             
          </div> 
        </Link> 
        <Link href="/breakfast"
        className="rounded-lg border border-gray-800 hover:border-gray-600 px-4 py-4 block w-[250px] md:w-[300px]
        transition-colors hover:bg-gray-100 mb-5 text-slate-700 "
        >
          <div className={` text-xl md:text-2xl font-semibold flex justify-between gap-4 md:gap-6`}>

            <p className=' self-start'>APPETIZERS</p>
            <p>/</p>
            <p className=' self-end'>المقبلات</p>
             
          </div> 
        </Link> 
        <Link href="/breakfast"
        className="rounded-lg border border-gray-800 hover:border-gray-600 px-6 py-4 w-[250px] md:w-[300px]
                  transition-colors hover:bg-[#f6dadf] block text-slate-700 hover:text-black "
        >
          <div className={`text-xl md:text-2xl font-semibold flex items-center justify-center gap-4 md:gap-6`}>

            <p className=' self-start'>Salads</p>
            <p>/</p>
            <p className=' self-end'>السلطات</p>
             
          </div> 
        </Link> 
 
    </main>
  </>
  )
}
