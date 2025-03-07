import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2';

export default function FeaturedProductCard({product}) {

  const {name,original_price,discounted_price,images,rating} = product;
  const main_image = images.main[0]
  return (
    <div className='border-[1px] border-lighterGray p-5 rounded-lg group hover:border-darkGreen2 hover:shadow-[0px_0px_12px_0px_#20B526] shadow-sm'>
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
