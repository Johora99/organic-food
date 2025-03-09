import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function Title({title}) {
  return (
    <div className='flex items-center justify-between py-10'>
      <h2 className='text-darkGray font-semibold text-4xl'>{title}</h2>
      <Link href={''} className='flex items-center gap-2 text-pureGreen font-medium text-base'>View All <IoIosArrowRoundForward className='text-2xl'/></Link>
    </div>
  )
}
