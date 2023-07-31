"use client"

import SelectedItem from './SelectedItem'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';



const Menu = ({ items }) => {
 
   return (

    <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-3">
      {items.map(menuItem => {
      const { id, title,titleAr,category, img, desc,descAr, price,categoryEn } = menuItem;

      return (
            <div  key={id}>
            <Link href={`/${categoryEn}/${id}`}>
              <article  className="p-1 flex items-center justify-center flex-col text-sm
                rounded-lg hover:border-gray-600 px-2 py-2 cursor-pointer
                transition-colors bg-gray-100 mb-5 text-slate-700 w-[230px] ">               
                  <Image src={img} width={220}  height={220} alt="" layout='responsive' className='mb-3 border-2'/>
                  <div className="mx-2">
                    <header>
                      <div className='flex justify-center items-center flex-col'>
                        <p className='pb-2 lowercase'>{title}</p>
                        <p className='pb-2 '>{titleAr}</p>
                      </div>
                      <h4 className="flex justify-center items-center text-[#c59d5f] font-semibold">KD{price.toFixed(3)}</h4>
                    </header>
                  </div>
             </article> 
            </Link>
          </div>
        ) })}
     </div>      
  )
}

export default Menu;
