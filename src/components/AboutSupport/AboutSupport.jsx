import React from 'react'
import SupportCard from './SupportCard'
import img1 from '../../../public/img-1.png'
import img2 from '../../../public/img-2.png'
import img3 from '../../../public/img-3.png'
import img4 from '../../../public/img-4.png'
export default function AboutSupport() {
  const features = [
    
  {
    "id": 1,
    "title": "Free Shipping",
    "description": "Free shipping with discount",
    "image": img1,
  },
  {
    "id": 2,
    "title": "Great Support 24/7",
    "description": "Instant access to Contact",
    "image": img2,
  },
  {
    "id": 3,
    "title": "100% Secure Payment",
    "description": "We ensure your money is safe",
    "image": img3
  },
  {
    "id": 4,
    "title": "Money-Back Guarantee",
    "description": "30 days money-back",
    "image": img4
  }
  ]


  return (
    <div className='w-full'>
      <div className='container w-11/12 mx-auto '>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
          {
          features.map(feature =><SupportCard key={feature.id} feature={feature}></SupportCard>)
        }
      </div>
      </div>
      
    </div>
  )
}
