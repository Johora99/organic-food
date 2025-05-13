import React from 'react'
import { PiTagThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
export default function BlogCard({blog}) {
  const {image, date, category, author, comments, title, link} = blog;
  return (
    <div>
  <div className='relative'>
      <img src={image} alt="" className='w-full h-[300px] object-cover rounded-t-lg'/>
      <div className='absolute left-5 bottom-5 bg-white px-5 py-2 text-center rounded-lg'>
         <p className='text-lg font-medium text-darkGray'>{date.day}</p>
         <p className='text-xs font-medium text-lightGray'>{date.month}</p>
      </div>
  </div>
  <div className='bg-white rounded-b-lg'>
    <div className='p-5'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 text-darkGray2'>
          <PiTagThin  className='text-darkGray2 text-sm'/>
           <p className='text-darkGray2 text-sm'>{category}</p>
        </div>
        <div className='flex items-center gap-2'>
          <CiUser className='text-darkGray2 text-sm'/>
           <p className='text-darkGray2 text-sm'>By {author}</p>
        </div>
        <div className='flex items-center gap-2'>
          <GoComment className='text-darkGray2 text-sm'/>
           <p className='text-darkGray2 text-sm'>{comments} Comments</p>
        </div>
      </div>
      <div>
        <p className='text-darkGreen2 text-lg font-medium my-2'>{title}</p>
      </div>
      <div>
        <Link href={''} className='flex items-center gap-2 text-pureGreen font-medium text-base'>Read More <IoIosArrowRoundForward className='text-2xl'/></Link>
      </div>
    </div>
  </div>
    </div>
  )
}
