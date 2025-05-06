import Image from 'next/image'
import React from 'react'
import bgImg from '../../../public/BG (19).png'
import SuccessCard from './SuccessCard'
export default function SuccessRatio() {
  const data = [
    {title: "Years of Hard Work" , count: '37'},
    {title: "Happy Customer" , count: '500k'},
    {title: "Qualified Team Member" , count: '28'},
    {title: "Monthly Orders" , count: '750k'},
  ]
  return (
    <div className='w-full relative'>
      <Image src={bgImg} alt='' className='absolute top-0 left-0 w-full h-full z-[-1]'/>
      <div className='container w-11/12 mx-auto py-20'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
          {
          data.map((item,index) => <SuccessCard item={item} key={index}></SuccessCard>)
        }
      </div>
      </div>
    </div>
  )
}
