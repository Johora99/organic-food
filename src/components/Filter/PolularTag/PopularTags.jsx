'use client'
import React, { useState } from 'react'

export default function PopularTags() {
  const tags = [
  "Healthy", "Low fat", "Vegetarian", "Kid foods", "Vitamins",
  "Bread", "Meat", "Snacks", "Tiffin", "Launch", "Dinner", "Breackfast", "Fruit"
];
const [items, setItems] = useState([])
const handleSelectedItems = (tag)=>{
  const findItem = items.find(item=> item === tag)
  if(findItem){
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
            tags.map((tag, indx) => {
              const isSelected = items.find(item => item === tag);
              return(
              
              <button key={indx} onClick={()=>handleSelectedItems(tag)} className={`text-darkGray text-sm bg-lightestGray py-2 px-5 rounded-full  ${isSelected ? 'bg-pureGreen text-white' : 'hover:bg-green-100'}`}>
                {tag}
              </button>
            )
            })
          }
        </div>
    </div>
  )
}
