'use client'
import React, { useState } from 'react'

export default function PopularTags() {
  const tags = [
  "Healthy", "Low fat", "Vegetarian", "Kid foods", "Vitamins",
  "Bread", "Meat", "Snacks", "Tiffin", "Launch", "Dinner", "Breackfast", "Fruit"
];
const [items, setItems] = useState([])
const handleSelectedItems = (tag)=>{
  if(items.includes(tag)){
    const filterItems = items.filter(item => item !== tag);
    setItems(filterItems);
  }else{
    setItems([...items, tag])
  }
}

  return (
    <div>
        <h3 className='mb-4 text-xl font-medium text-darkGray'>Popular Tag</h3>
        <div className='flex flex-wrap gap-2'>
          {
            tags.map((tag, indx) =>(
              <button key={indx} onClick={()=>handleSelectedItems(tag)} className={`text-darkGray text-sm bg-lightestGray py-2 px-5 rounded-full ${items.includes(tag) && 'bg-pureGreen text-white'}`}>
                {tag}
              </button>
            ))
          }
        </div>
    </div>
  )
}
