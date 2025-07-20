import axios from 'axios';
import React from 'react'

export default async function page({params}) {
  const id = await params.id;
  try{
    const res = await axios.get(`http://localhost:3000/api/products/${id}`)
    const product = res.data || [];
    return (
      <div>{id}</div>
    )
  }catch(err){
    console.log(err)
  }
}
