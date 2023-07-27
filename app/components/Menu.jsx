import React from 'react';
import Image from 'next/image';

const Menu = ({ items }) => {

  return (
    <div className="">

      {items.map(menuItem => {
        const { id, title,titleAr, img, desc,descAr, price } = menuItem;
        return (
          <article key={id} className="p-1 flex items-center justify-center flex-col text-sm
          rounded-lg hover:border-gray-600 px-2 py-2 cursor-pointer
          transition-colors bg-gray-100 mb-5 text-slate-700 w-[230px]      
          
          ">
            <Image src={img} width={220}  height={220} alt="" className='mb-3 border-2'/>
          
            <div className="mx-2">
              <header>
                <div className='flex justify-center items-center flex-col'>
                {/* <h4> { svg !== '' ? <img src={svg} alt='' className='svgitem'/> : ''}<span>{title}</span></h4> */}
                  <p className='pb-2'>{title}</p>
                  <p className='pb-2 '>{titleAr}</p>
                </div>
               
                <h4 className="flex justify-center items-center text-[#c59d5f] font-semibold">KD{price.toFixed(3)}</h4>
              </header>
              {/* <div className='descs'>
                <p className="item-text">{desc}</p>
                <p className="item-text">{descAr}</p>
              </div> */}
              
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
