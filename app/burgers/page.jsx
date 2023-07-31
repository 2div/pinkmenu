import React from 'react'
import Burgers from '../components/Burgers'
import { BsArrowReturnLeft } from 'react-icons/bs';
import Link from 'next/link'

const burgers = () => {

  return (
    <main className="flex flex-col justify-center items-center">
      <Link href="/burgers" >
      <div className={`flex justify-center items-center gap-1  text-[20px] md:text-3xl md:font-bold mt-12 mb-6 bg-[#bb9965] text-white
             border-slate-300 py-1 px-2 cursor-pointer rounded-sm hover:shadow-sm hover:outline-none`}>
            <p>Burger Menu</p>
            <p>/</p>
            <p>قائمة البرجر</p>
          </div>  
        </Link>
        
        <div className='flex flex-col justify-center items-center my-3'>
        <Link href="/" className=" px-1 py-1 mb-3 block text-slate-700 text-sm " >
        <div className={` flex justify-normal items-center text-xl md:text-2xl font-semibold md:gap-6
            text-[#c59d5f] border rounded-md border-1 bg-slate-200 py-1 px-2 cursor-pointer hover:bg-slate-200 hover:shadow-md`}>
            <BsArrowReturnLeft/> 
            <p className='pl-2'>Back / الرجوع</p>
        </div> 
        </Link> 
        </div>
        <Burgers/>
    </main>
  )
}

export default burgers