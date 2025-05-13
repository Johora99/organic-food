import axios from 'axios';
import Image from 'next/image';
import React from 'react'
import bgImg from '../../../public/Testimonials.png'
import TestimonialSlider from './TestimonialSlider';
export default async function Testimonial() {
  const testimonialData = async ()=>{
    const res = await axios.get('http://localhost:3000/testimonial.json')
    const data = await res.data;
    return data;
  }
  const testimonial = await testimonialData();
  return (
     <div className='w-full relative py-20'>
           <Image src={bgImg} alt='' className='absolute top-0 left-0 w-full h-full z-[-1]'/>
           <div className='container w-11/12 mx-auto'>
           <div className=''>
             <p className='text-base text-pureGreen font-normal uppercase' style={{fontFamily: "MyFont"}}>Testimonial</p>
             <h3 className='text-4xl text-darkGray font-semibold mb-10'>What Our Customer Says</h3>
           </div>
           <div>
          <TestimonialSlider testimonial={testimonial}></TestimonialSlider>
        </div>
           </div>
         </div>
  )
}
