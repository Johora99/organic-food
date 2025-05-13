'use client'

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from '../../../public/Vector.png'
import './testimonial.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
export default function TestimonialSlider({testimonial}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Ensure arrows are enabled
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className="slider-container pb-20">
      <div className="w-full testimonial-slider">
        <Slider {...settings}>
         {
          testimonial.length > 0 ? testimonial.map(item => <div className="bg-white p-5 rounded-lg h-full">
            <div className="flex flex-col justify-between grow h-full">
              <Image src={icon} alt="" width={50} ></Image>
              <p className="my-5 text-darkGray2 text-sm font-normal">{item?.quote}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                <Image src={item?.user?.image} width={50} height={50} alt="" className="w-10 h-10 rounded-full object-cover"></Image>
                <div>
                  <p className="text-darkGray text-base font-medium">{item?.user?.name}</p>
                  <p className="text-dimGray text-sm font-normal">{item?.user?.role}</p>
                </div>
                </div>
                <div>
                <Rating
                style={{ maxWidth: 80 }}
                 value={testimonial?.rating}
                 readOnly
                 />
  
                 </div>
              </div>
            </div>
          </div>):<p>No testimonial is available</p>
         }
          
        </Slider>
      </div>
    </div>
  )
}

