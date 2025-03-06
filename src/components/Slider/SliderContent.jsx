
import Image from 'next/image';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function SliderContent({image}) {
  return (
      <div className='container w-11/12 mx-auto h-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
              <Image src={image} alt=''/>
            <div className='justify-self-end'>
              <p className='text-pureGreen uppercase text-sm font-medium'>Welcome to shopery</p>
              <h2 className='text-darkGray text-7xl font-semibold my-5'>Fresh & Healthy <br /> Organic Food</h2>
              <h4 className='text-darkGray text-3xl'>Sale up to <span className='font-semibold text-brightOrange'>30% OFF</span></h4>
              <p className='my-5 text-lightGray text-sm'>Free shipping on all your order. we deliver, you enjoy</p>
              <button className='text-base font-semibold text-white bg-pureGreen flex items-center gap-2 rounded-full py-2 px-5'>Shop now <IoIosArrowRoundForward className='text-2xl'/></button>
            </div>
            </div>
          </div>
  )
}
