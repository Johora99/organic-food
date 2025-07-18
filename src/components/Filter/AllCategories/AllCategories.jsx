import dbConnect from '@/lib/dbConnect'
import React from 'react'

export default async function AllCategories() {
  const allCategories = await dbConnect('products')
    .aggregate([
      {
        $group: {
          _id: '$category',
          name: { $first: '$category' },
          totalProduct: { $sum: 1 }
        }
      }
    ])
    .toArray()

  return (
    <div>
      <h3 className='my-3 text-xl font-medium text-darkGray'>All Categories</h3>
      <div className='flex flex-col items-start gap-3'>
        {allCategories.map(item => (
          <div key={item.name} className="flex items-center gap-2">
         <input
    type="radio"
    name="category1"
    id="vegetables"
    className="w-4 h-4 rounded-full border-2 border-green-600 checked:border-green-600 accent-green-600 focus:ring-0 focus:outline-none"
  />

            <label className='text-sm text-darkGray'>{item.name} <span className='text-sm text-lightGray'>({item.totalProduct})</span></label>
          </div>
        ))}
        <div className='w-full border-b-[1px] border-lighterGray my-3'></div>
      </div>
    </div>
  )
}
