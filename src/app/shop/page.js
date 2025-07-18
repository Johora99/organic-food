import BreadCrumb from '@/components/BreadCrumb/BreadCrumb'
import React from 'react'
import filter from '../../../public/Filter 24px.png'
import Image from 'next/image'
import AllCategories from '@/components/Filter/AllCategories/AllCategories'
import PriceRange from '@/components/Filter/PriceRange/PriceRange'
export default function page() {
  return (
    <div className='w-full bg-white'>
       <div className='container w-11/12 mx-auto my-10'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-3'>
              <div>
                    <button className='btn flex items-center gap-2 text-sm font-semibold'>Filter <Image src={filter} alt='' /></button>
                    <div>
                      <AllCategories/>
                      <PriceRange />
                    </div>
              </div>
            </div>
            <div className='col-span-9'></div>
          </div>
       </div>
    </div>
  )
}
