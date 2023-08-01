
import React from 'react';
import Image from 'next/image';
import items from './../data'


const SelectedItem = ({ newItems }) => {
  //const newItems = items.filter((id) => id === items.id);
  
  const {img,title,titleAr,desc,descAr,price} = newItems

  return (
    <div className="flex justify-center items-center">
         
            <article className="p-1 flex items-center justify-center flex-col text-sm
            rounded-lg hover:border-gray-600 px-2 py-2 cursor-pointer
            transition-colors bg-gray-100 mb-12 text-slate-700 mx-4  min-[400px]:w-[400px] min-[450px]:w-[450px] overflow-hidden  ">         
           <Image src={img} width="0" height="0" sizes="100vw" className="w-full h-auto mb-3 border-2 rounded-md overflow-hidden" alt={title} priority/>
              <div className="mx-2">
                
               <div className='flex justify-center items-center flex-col text-[16px] xm:text-[19px]'>
                    <p className='pb-2 pt-2 capitalize '>{title}</p>
                    <p className='pb-6 pt-2 '>{titleAr}</p>
               </div>
               <div className=''>
                <p className="item-text pb-2 capitalize px-2 text-[15px] xm:text-[19px] leading-8">{desc}</p>
                <p className="item-text pb-2 min-[401px]:hidden  px-2">-----------------------------------------------</p>
                <p className="item-text pb-2 min-[402px]:display max-[401px]:hidden min-[601px]:hidden  px-2">----------------------------------------------------------------------------</p>
                <p className="item-text pb-2 min-[602px]:display  max-[601px]:hidden  px-2">----------------------------------------------------------------------------------------------------</p>
                <p className="item-text pb-2 px-2 text-[15px] xm:text-[19px] leading-8">{descAr}</p>
              </div>
               <header>
                  <h4 className="flex justify-center items-center text-[#c59d5f] font-semibold pb-3 py-4 text-[15px] xm:text-[18px]">KD {price?.toFixed(3)}</h4>
                </header>
            </div>

          </article>
      
   
    </div>
  );
};

export default SelectedItem;
