import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2';

export default function FeaturedProductCard({product}) {

  const {name,original_price,discounted_price,images,rating} = product;
  const main_image = images.main[0]
  return (
    <div className='cardBorder group'>
         <div className=' absolute top-0 right-0 p-5 hidden group-hover:block gap-2 '>
          <div className='relative w-12 h-12 border-[1px] border-lightestGray  rounded-full bg-white hover:text-white hover:bg-pureGreen mb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl  size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
             </svg>

           </div>
         <div className='relative w-12 h-12 border-[1px] border-lightestGray rounded-full bg-white hover:text-white hover:bg-pureGreen'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

           </div>
         </div>
        <img src={main_image} alt="" className='w-full h-[300px]'/>

        <div className='flex items-center justify-between mt-5'>
          <div>
            <p className='text-darkGray2 text-sm'>{name}</p>
            <div className='flex items-center gap-2'>
              <p className='text-base font-medium text-darkGray'>${discounted_price}</p>
              <p className='text-base font-medium text-dimGray line-through decoration-dimGray'>${original_price}</p>
            </div>
            <div>
              <Rating
              style={{ maxWidth: 60 }}
              value={rating}
              readOnly
              />
            </div>
          </div>
           <div className='relative w-12 h-12 bg-lightestGray rounded-full group-hover:bg-pureGreen'>
              <HiOutlineShoppingBag className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl group-hover:text-white'/>
           </div>
        </div>
    </div>
  )
}
