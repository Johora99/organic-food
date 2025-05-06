import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react'
import bgImg from '../../../public/Product (1).png'
import Title from '../Title/Title';
import FeaturedProductCard from '../FeaturedProducts/FeaturedProductCard';
export default async function BestSellerProducts() {
  const bestSellingProducts = await dbConnect('products').find({category_products : 'Best Seller'}).sort({createdAt:-1}).limit(7).toArray();
  return (
    <div className='w-full relative'>
  <Image src={bgImg} alt='' className='absolute top-0 left-0 w-full h-full z-[-1]'/>    
     <div className='container w-11/12 mx-auto relative z-50'>
      <div>
        <Title title={'Best Seller Products'}></Title>
      </div>
     <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pb-10'>
        {

         bestSellingProducts.map(product => <FeaturedProductCard product={product}></FeaturedProductCard>)
        }
     </div>
    </div>  
    </div>
  )
}
