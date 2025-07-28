import React from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
export default function RatingRange() {
const ratings = [
  { id: 1, value: 5, textValue: '5.0' },
  { id: 2, value: 4, textValue: '4.0 & up' },
  { id: 3, value: 3, textValue: '3.0 % up' },
  { id: 5, value: 2, textValue: '2.0 & up' },
  { id: 5, value: 1, textValue: '1.0 & up' }
];

  return (
    <div>
      <h3 className='mb-4 text-xl font-medium text-darkGray'>Rating</h3>
    <div className='mb-5'>
        <div className='flex flex-col gap-2'>
      {
        ratings.map(rating =>  <div className='flex items-center gap-2'>
   <input
  type="checkbox"
  className="appearance-none cursor-pointer
    w-4 h-4 border-1 border-lightGray2 rounded
    checked:bg-pureGreen checked:border-transparent
    custom-checkbox 
  "
/>
       <Rating
        style={{ maxWidth: 80 }}
        value={rating.value}
        readOnly
        />
        <p className='text-darkGray text-sm font-normal'>{rating.textValue}</p>
  
        </div>)
      }
        
      </div>
    </div>
        <div className='w-full border-b-[1px] border-lighterGray my-4'></div>
    </div>
  )
}
