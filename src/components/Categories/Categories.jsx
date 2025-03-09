import React from 'react'
import bgImg from '../../../public/BG-1.png'
import Image from 'next/image'
import Title from '../Title/Title'
import CategoriesSlider from './CategoriesSlider'
export default function Categories() {
  return (
    <div className='w-full h-[500px] relative'>
      <Image src={bgImg} alt='' className='absolute top-0 left-0 w-full h-full z-[-1]'/>
      <div className='container w-11/12 mx-auto'>
        <Title title={'Shop by Top Categories'}></Title>
        <div>
          <CategoriesSlider></CategoriesSlider>
        </div>
      </div>
    </div>
  )
}
