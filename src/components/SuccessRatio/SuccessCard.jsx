import React from 'react'

export default function SuccessCard({item}) {
  const {title, count} = item;
  return (
    <div className='text-center bg-lightbg rounded-lg p-8'>
      <h2 className='text-5xl text-pureGreen font-light mb-2'>{count}+</h2>
      <p className='text-lg font-normal text-white'>{title}</p>
    </div>
  )
}