import React from 'react'
import HotDeals from './HotDeals'

export default function PromotionalItems() {
    
  return (
    <div className='container w-11/12 mx-auto pb-10'>
       <div className='grid grid-cols-4 gap-10'>
        <div>
          <h3 className='text-2xl font-medium text-darkGray mb-3'>Hot Deals</h3>
          <HotDeals />
        </div>
        <div>
          <h3 className='text-2xl font-medium text-darkGray mb-3'>Best Seller</h3>
        </div>
        <div>
          <h3 className='text-2xl font-medium text-darkGray mb-3'>Top Rated</h3>
        </div>
        <div></div>
       </div>
    </div>
  )
}
