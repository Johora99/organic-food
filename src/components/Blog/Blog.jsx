import React from 'react'
import bgImg from '../../../public/Blog.png'
import Image from 'next/image'
import axios from 'axios'
import BlogCard from './BlogCard'
export default async function Blog() {
  const blogsData = async ()=>{
    const res = await axios.get('http://localhost:3000/blog.json')
    const data = await res.data;
    return data;
  }
  const blogs = await blogsData();
  console.log(blogs)
  return (
    <div className='w-full relative py-20'>
      <Image src={bgImg} alt='' className='absolute top-0 left-0 w-full h-full z-[-1]'/>
      <div className='container w-11/12 mx-auto'>
      <div className='text-center'>
        <p className='text-base text-pureGreen font-normal' style={{fontFamily: "MyFont"}}>Blog</p>
        <h3 className='text-4xl text-darkGray font-semibold'>Latest News</h3>
      </div>
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {
        blogs.length > 0 ? blogs.map((blog, index) => <BlogCard blog={blog} key={index}></BlogCard>) :  (<p className="col-span-full text-center py-10">No best selling products found</p>)
       }
       </div>
      </div>
    </div>
  )
}
