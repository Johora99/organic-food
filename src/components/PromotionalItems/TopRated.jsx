import axios from 'axios'
import React from 'react'
import PromotionalItemsCard from './PromotionalItemsCard';

export default async function TopRated() {
try {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
  const topRated = res.data.filter(item => item.rating > 4).slice(0, 3);
  return(
    <div className='flex flex-col gap-5 h-full'>
      {
        topRated.map(item => <PromotionalItemsCard key={item._id} item={item}></PromotionalItemsCard>)
      }
    </div>
  )
} catch (error) {
  
    return <div className="text-red-500">Failed to load best sellers.</div>;
}
}
