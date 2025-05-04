'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vegPic from '../../../public/Vegetable.png';
import fruit from '../../../public/fruits 1.png';
import fish from '../../../public/Group.png';
import meat from '../../../public/meat 1.png';
import drinks from '../../../public/soft-drink 1.png';
import snacks from '../../../public/snacks 1.png';
import Image from "next/image";
function CategoriesSlider({allCategories}) {
   const categoryImages = {
    'Vegetables': vegPic,
    'Fresh Fruit': fruit,
    'Fish': fish,
    'Meat': meat,
    'Water and Drinks': drinks,
    'Snacks': snacks,
    // Add more mappings as needed
  };
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
        allCategories.map(category => <div className="px-5 "> 
            <div className='cardBorder group text-center'>
            <Image  src={categoryImages[category.name]} alt="" className="mx-auto"></Image>
              <p className="text-base font-medium text-darkGray my-2 group-hover:text-darkGreen2">{category.name}</p>
              <p className="text-sm font-normal text-lightGray">{category.totalProduct} Products</p>
            </div>
          </div> )
       }
          
        </Slider>
      </div>
    </div>
  );
}

export default CategoriesSlider;