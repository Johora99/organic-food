import Image from 'next/image'
import React from 'react'
import { Rating } from '@smastrom/react-rating';
import Link from 'next/link';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
export default function PromotionalItemsCard({item}) {
  const {_id,name,original_price,discounted_price,images,rating} = item;
  const main_image = images.main[0]
  return (
    <div className='cardBorder group'>
      <div className='flex items-center gap-5'>
      <img src={main_image} alt="" className='h-24 w-20 '/>
      <div>
         <p className='text-sm text-darkGray2 group-hover:text-darkGreen2'>{name}</p>
        <div className='group-hover:hidden'>
           <p className='text-base font-medium text-darkGray my-2'>${discounted_price}</p>
           <div>
          <Rating
          style={{ maxWidth: 60 }}
           value={rating}
          readOnly
           />
        </div>
        </div>
    
             <div className='hidden group-hover:flex items-center gap-3 mt-3'>
              <div className='relative w-10 h-10 bg-white rounded-full group-hover:bg-pureGreen'>
                         <HiOutlineShoppingBag className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl group-hover:text-white'/>
                      </div>
                       <Link href={`/productDetails/${_id}`}  className='cursor-pointer'>
         <div className='relative w-10 h-10 border-[1px] border-lightestGray rounded-full bg-white hover:text-white hover:bg-pureGreen'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

           </div>
           </Link>
              
              <div className='relative w-10 h-10 border-[1px] border-lightestGray  rounded-full bg-white hover:text-white hover:bg-pureGreen'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl  size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
             </svg>

           </div>
          
           </div>
      
      </div>
      </div>
    </div>
  )
}
