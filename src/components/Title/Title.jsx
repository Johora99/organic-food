import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function Title({title}) {
  return (
    <div className='flex items-center justify-between'>
      <h2>{title}</h2>
      <Link href={''}>View All <IoIosArrowRoundForward className='text-2xl'/></Link>
    </div>
  )
}
