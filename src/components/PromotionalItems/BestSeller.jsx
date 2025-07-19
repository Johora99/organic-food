import React from 'react'
import axios from 'axios';
import PromotionalItemsCard from './PromotionalItemsCard';

export default async function BestSeller() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/products`);
    
    const bestSellingProducts = res.data
      .filter(item => item.category_products === 'Best Seller')
      .slice(0, 3);

    return (
      <div className='flex flex-col gap-5 h-full'>
        {bestSellingProducts.map(item => (
          <PromotionalItemsCard key={item._id} item={item} />
        ))}
      </div>
    );
  } catch (error) {
    return <div className="text-red-500">Failed to load best sellers.</div>;
  }
}
