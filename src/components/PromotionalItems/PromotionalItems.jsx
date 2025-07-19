import React from 'react'
import HotDeals from './HotDeals'
import BestSeller from './BestSeller'
import TopRated from './TopRated'
import GetOffer from './GetOffer'

export default function PromotionalItems() {
    
  return (
    <div className='container w-11/12 mx-auto pb-30'>
       <div className='grid grid-cols-4 gap-10 items-stretch'>
        <div>
          <h3 className='text-2xl font-medium text-darkGray mb-5'>Hot Deals</h3>
          <HotDeals />
        </div>
        <div>
          <h3 className='text-2xl font-medium text-darkGray mb-5'>Best Seller</h3>
          <BestSeller />
        </div>
        <div>
          <h3 className='text-2xl font-medium text-darkGray mb-5'>Top Rated</h3>
          <TopRated />
        </div>
        <div>
          <GetOffer />
        </div>
       </div>
    </div>
  )
}
