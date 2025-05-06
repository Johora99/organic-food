import Image from 'next/image'
import React from 'react'
import bgImg from '../../../public/Bannar.png'
import img1 from '../../../public/sale-1.png'
import img2 from '../../../public/sale-2.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import CountDown from '../CountDouwn/CountDown'
export default function SalesAdd() {
  return (
    <div className='w-full relative mt-20'>
      <Image src={bgImg} alt='' className='absolute top-0 left-0 w-full h-full z-[-1]'/>
      <div className='container w-11/12 mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='relative'>
            <Image src={img1} alt='' className='w-full'/>
            <div className='absolute top-1/2 -translate-y-1/2 ml-10'>
              <p className='text-white text-sm tracking-wider'>100% Organic</p>
              <h2 className='text-white font-semibold text-4xl mt-2 tracking-wide'>Fruit & Vegetable</h2>
              <div className='flex items-center gap-2 my-6'>
                <p className='text-white opacity-70 tracking-wider text-sm'>Starting at:</p>
                <p className='text-white text-sm font-medium bg-orange py-1 px-2 rounded-lg'>$11.99</p>
              </div>
              <button className='btn'>Shop now <IoIosArrowRoundForward className='text-2xl'/></button>
            </div>
          </div>
          <div className='relative'>
            <Image src={img2} alt='' className='w-full'/>
              <div className='absolute top-1/2 -translate-y-1/2 ml-10'>
              <p className='text-white text-sm tracking-wider uppercase'>sale off the week</p>
              <h2 className='text-white font-semibold text-4xl mt-2 tracking-wide'>Sales of the Year</h2>
              <div>
                <CountDown />
              </div>
              <button className='btn'>Shop now <IoIosArrowRoundForward className='text-2xl'/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
