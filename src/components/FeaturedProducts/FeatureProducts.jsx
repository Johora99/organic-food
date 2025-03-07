import dbConnect from '@/lib/dbConnect'
import React from 'react'
import FeaturedProductCard from './FeaturedProductCard';

export default async function FeatureProducts() {
  const FeatureProducts = await dbConnect('products').find().toArray();
  return (
    <div>
      {
        FeatureProducts?.map(product=><FeaturedProductCard key={product._id} product={product}></FeaturedProductCard>)
      }
    </div>
  )
}
