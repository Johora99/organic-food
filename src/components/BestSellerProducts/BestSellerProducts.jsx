import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react'
import bgImg from '../../../public/Product (1).png'
import Title from '../Title/Title';
import FeaturedProductCard from '../FeaturedProducts/FeaturedProductCard';
import axios from 'axios';

export default async function BestSellerProducts() {
   try{
    const res = await axios.get(`http://localhost:3000/api/products`)
    const bestSellingProducts = res.data.filter(item => item.category_products === 'Best Seller').slice(0, 4);
    return (
      <div className='w-full relative'>
    <Image src={bgImg} alt='' className='absolute top-0 left-0 w-full h-full z-[-1]'/>    
       <div className='container w-11/12 mx-auto relative z-50'>
        <div>
          <Title title={'Best Seller Products'}></Title>
        </div>
       <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pb-10'>
          {
            bestSellingProducts.length > 0 ?
          (bestSellingProducts.map(product => <FeaturedProductCard product={product} key={product._id}></FeaturedProductCard>)
          ): 
          (<p className="col-span-full text-center py-10">No best selling products found</p>)
          }
       </div>
      </div>  
      </div>
    )
   }  catch(error){
        return (
      <div className='w-full relative'>
        <Image src={bgImg} alt='' className='absolute top-0 left-0 w-full h-full z-[-1]' />
        <div className='container w-11/12 mx-auto relative z-50'>
          <div>
            <Title title={'Best Seller Products'} />
            <p className='text-center py-10 text-red-500'>
              Error loading products. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );

   }
}
