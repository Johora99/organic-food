import dbConnect from '@/lib/dbConnect'
import React from 'react'
import FeaturedProductCard from './FeaturedProductCard';
import Title from '../Title/Title';

export default async function FeatureProducts() {
  const FeatureProducts = await dbConnect('products').find().sort({createdAt:-1}).limit(4).toArray();
  return (
    <div className='container w-11/12 mx-auto'>
      <div>
        <Title title={'Featured Products'}></Title>
      </div>
     <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pb-10'>
        {
        FeatureProducts?.map(product=><FeaturedProductCard key={product._id} product={product}></FeaturedProductCard>)
      }
     </div>
    </div>
  )
}
