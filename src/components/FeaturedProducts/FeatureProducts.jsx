import React from 'react'
import FeaturedProductCard from './FeaturedProductCard';
import Title from '../Title/Title';
import axios from 'axios';

export default async function FeatureProducts() {
  try {
    const response = await axios.get(`${process.env.API_BASE_URL}/api/products`);
    const featuredProducts = response.data.filter(item => 
      item.category_products === 'Featured' || []
    ).slice(0, 4);

    return (
      <div className='container w-11/12 mx-auto'>
        <div>
          <Title title={'Featured Products'} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10'>
          {featuredProducts.length > 0 ? (
            featuredProducts.map(product => (
              <FeaturedProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center py-10">No featured products found</p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return (
      <div className='container w-11/12 mx-auto'>
        <Title title={'Featured Products'} />
        <p className="text-center py-10 text-red-500">Error loading products. Please try again later.</p>
      </div>
    );
  }
}