import React from 'react'
import bgImg from '../../../public/BG-1.png'
import Image from 'next/image'
import Title from '../Title/Title'
import CategoriesSlider from './CategoriesSlider'
import dbConnect from '@/lib/dbConnect'
export default async function Categories() {
  const allCategories = await dbConnect('products').aggregate([{$group: {_id: '$category',  name: { $first: "$category" },totalProduct: {$sum: 1}}}]).toArray()
  return (
    <div className='w-full relative'>
      <Image src={bgImg} alt='' className='absolute top-0 left-0 w-full h-full z-[-1]'/>
      <div className='container w-11/12 mx-auto'>
        <Title title={'Shop by Top Categories'}></Title>
        <div>
          <CategoriesSlider allCategories={allCategories}></CategoriesSlider>
        </div>
      </div>
    </div>
  )
}
