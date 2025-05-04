import Image from 'next/image'
import React from 'react'
import bgImg from '../../../public/Why Choose Us.png'
import img1 from '../../../public/Image.png'
import img2 from '../../../public/Image (1).png'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoIosArrowRoundForward } from 'react-icons/io'


export default function WhyUs() {
  return (
    <div className='w-full relative'>
   <Image src={bgImg} alt='' className='absolute top-0 left-0 w-full h-full z-[-1]'/>
      <div className='container w-11/12 mx-auto py-20'>
   <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
 <div className='w-full'>
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
       <div className='col-span-1'>
         <Image src={img1} alt=''className='w-full'/>
       </div>
       <div className='col-span-2'>
         <Image src={img2} alt='' className='w-full'/>
       </div>
     </div>
 </div>
 <div>
      <h2 className='text-4xl font-semibold text-darkGray mb-5'>100% Trusted <br /> Organic Food Store</h2>
      <div>
        <div className='flex gap-2 mb-5'>
          <div>
            <IoCheckmarkCircleSharp className='text-pureGreen text-xl '/>
          </div>

           <div>
             <h4 className='text-lg font-medium text-darkGray mb-2'>Healthy & natural food for lovers of healthy food.</h4>
             <p className='text-sm font-normal text-lightGray'>Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. </p>
           </div>
        </div>
        <div className='flex gap-2 mb-10'>
          <div>
              <IoCheckmarkCircleSharp className='text-pureGreen text-xl'/>
          </div>
          <div>
            <h4 className='text-lg font-medium text-darkGray mb-2'>Every day fresh and quality products for you.</h4>
            <p className='text-sm font-normal text-lightGray'>Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.</p>
          </div>
        </div>
      </div>
        <button className='btn'>Shop now <IoIosArrowRoundForward className='text-2xl'/></button>
    </div>
   </div>
    </div>
    </div>
  )
}
