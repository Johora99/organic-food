'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import bgImg from '../../../public/BG.png'
import slider1 from '../../../public/slider-1.png'
import slider2 from '../../../public/slider-2.png'
import slider3 from '../../../public/slider-3.png'
import SliderContent from './SliderContent';
import Image from 'next/image';
export default function Slider() {

  return (
    <div className='relative w-full  bg-grayishGreen '>
      <Image src={bgImg} alt="logo" className='absolute w-full h-full'/>
         <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[600px] "
      >
        <SwiperSlide className='pt-10'>
         <SliderContent image={slider1}></SliderContent>
        </SwiperSlide>
        <SwiperSlide className='pt-10'>
          <SliderContent image={slider2}></SliderContent>
        </SwiperSlide>
        <SwiperSlide className='pt-10'>
          <SliderContent image={slider3}></SliderContent>
        </SwiperSlide>
    
      </Swiper>

    </div>
  )
}
