'use client'

import Image from "next/image";
import Slider from "../Slider/Slider";

export default function TestimonialSlider({testimonial}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
      <div className="w-full">
        <Slider {...settings}>
       {
        testimonial.map(category => <div className="px-5 "> 
            <div className='cardBorder group text-center'>
            <Image  src={testimonial.image} alt="" className="mx-auto"></Image>
              <p className="text-base font-medium text-darkGray my-2 group-hover:text-darkGreen2">{category.name}</p>
              <p className="text-sm font-normal text-lightGray">{category.totalProduct} Products</p>
            </div>
          </div> )
       }
          
        </Slider>
      </div>
    </div>
  )
}

