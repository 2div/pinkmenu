"use client"

import Link from 'next/link';
import items from './../data'
import Menu from './Menu';


const newItems = items.filter((item) => item.category === 'Breakfast/الفطور');
console.log(newItems)
const Breakfast = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-6'>
        <div className='flex justify-center items-center'>
     
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
       
    </div>

        <Menu items={newItems} />
    </div>
  )
}

export default Breakfast