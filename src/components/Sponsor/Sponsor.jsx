import React from 'react'
import img1 from '../../../public/vector-3.png'
import img2 from '../../../public/mango-1.png'
import img3 from '../../../public/Group-1.png'
import img4 from '../../../public/food.png'
import img5 from '../../../public/Vector-2.png'
import img6 from '../../../public/Vector (1).png'
import Image from 'next/image'
export default function Sponsor() {
  return (
    <div className='container w-11/12 mx-auto mb-10'>
    <div className='flex items-center justify-between'>
      <Image src={img1} alt=''/>
      <Image src={img2} alt=''/>
      <Image src={img3} alt=''/>
      <Image src={img4} alt=''/>
      <Image src={img5} alt=''/>
      <Image src={img6} alt=''/>
    </div>
    </div>
  )
}
