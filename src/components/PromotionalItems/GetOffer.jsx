import React from 'react'
import bgImg from '../../../public/Rectangle 54.png'
import Image from 'next/image'
import { IoIosArrowRoundForward } from 'react-icons/io'
export default function GetOffer() {
  return (
  <div className='relative h-full'>
  <Image src={bgImg} alt='' className='w-full h-full overflow-hidden' />

  {/* Center this div absolutely */}
  <div className='absolute inset-0 flex justify-center pt-16'>
    <div className='text-center'>
      <p className='text-xs font-medium text-darkGray'>HOT SALE</p>
      <h3 className='text-3xl text-darkGray'>
        <span className='font-semibold'>Save 37%</span> on <br /> Every Order
      </h3>
      <button className='btn2 mx-auto mt-4'>
        Shop now <IoIosArrowRoundForward className='text-2xl' />
      </button>
    </div>
  </div>
</div>

  )
}
