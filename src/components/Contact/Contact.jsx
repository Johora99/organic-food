import React from 'react'
import bgImg1 from '../../../public/Icon.png'

import mail from '../../../public/mail 1.png'
import phone from '../../../public/Group (1).png'
import location from '../../../public/Map Pin (1).png'
import Image from 'next/image'
export default function Contact() {
  return (
    <div className='w-full bg-white pb-30'> 
  <div className='container w-11/12 mx-auto'>
     <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
       <div className='border-[1px] border-limeGreen rounded-lg p-5 col-span-1'>
      <div className=' mb-5 w-16  h-16 bg-no-repeat bg-cover transition-all duration-300 relative  bg-container' style={{
                backgroundImage: `url(${bgImg1.src})`,
              }}>
              <Image src={location} alt='' className='mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
          </div>
          <div>
            <p className='font-medium text-sm text-darkGray'>Our Location</p>
            <p className='text-sm font-normal text-dimGray'>1901 Thornridge Cir. Shiloh, Washington <br /> DC 20020, United States</p>
          </div>
       </div>
       <div className='border-[1px] border-limeGreen rounded-lg p-5 col-span-1'>
      <div className=' mb-5 w-16  h-16 bg-no-repeat bg-cover transition-all duration-300 relative  bg-container' style={{
                backgroundImage: `url(${bgImg1.src})`,
              }}>
              <Image src={phone} alt='' className='mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
          </div>
          <div>
            <p className='font-medium text-sm text-darkGray mb-2'>Call Us 24/7</p>
            <a href="tel:+13035550105" className='text-2xl text-pureGreen'>(303) 555-0105</a>
           </div>
       </div>
       <div className='border-[1px] border-limeGreen rounded-lg col-span-2 p-5'>
       <div className=' mb-5 w-16  h-16 bg-no-repeat bg-cover transition-all duration-300 relative  bg-container' style={{
                backgroundImage: `url(${bgImg1.src})`,
              }}>
              <Image src={mail} alt='' className='mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
          </div>
        <div>
        <p className='font-medium text-sm text-darkGray mb-2'>Subscribe Newsletter</p>
          <div className='border-[1px] border-limeGreen rounded-full pl-5 flex items-center justify-between'>
            <input type="email" name="" id="" placeholder='Your email address' className='focus:outline-none' />
            <button className='btn'>Subscribe</button>
          </div>
        </div>
       </div>
     </div>
    </div>
    </div>
  )
}
