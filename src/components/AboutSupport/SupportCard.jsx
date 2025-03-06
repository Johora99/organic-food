import Image from 'next/image';
import React from 'react'
import bgImg1 from '../../../public/Icon.png'
import bgImg2 from '../../../public/Icon (1).png'
export default function SupportCard({feature}) {
  const {title,description,image} = feature;
  return (
    <>
     <div className='text-center border-b-[1px] border-dimGray p-10 hover:border-b-[3px] hover:border-b-pureGreen  group'>
    <div className=' mb-8 w-16  h-16 bg-no-repeat bg-cover transition-all duration-300 relative mx-auto bg-container' style={{
          backgroundImage: `url(${bgImg1.src})`,
        }}>
        <Image src={image} alt='' className='mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
    </div>
     <p className='text-darkGray text-lg font-semibold mb-2'>{title}</p>
     <p className='text-dimGray text-sm'>{description}</p>
     </div>
    </>
  )
}
