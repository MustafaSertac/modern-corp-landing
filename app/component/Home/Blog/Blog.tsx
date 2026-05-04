import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16 bg-white' data-aos="fade-up">
        <h2 className='text-[#b69974] text-center text-lg font-medium tracking-widest'>Blog</h2>
        <h1 className='text-3xl md:text-5xl mt-4 text-black font-bold text-center'>
        Latest news & articles: <br/>
        From Our Blog
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[80%] mx-auto gap-6 mt-5'>
          <BlogCard image="/images/b1.png" title="The Future of Web Development: Trends to Watch in 2024" aosDelay={0}></BlogCard>
          <BlogCard image="/images/b2.png" title="10 Essential Tips for Modern Web Design" aosDelay={120}></BlogCard>
          <BlogCard image="/images/b3.png" title="How to Build a Scalable React Application" aosDelay={240}></BlogCard>
        </div>
    </div>
  )
}

export default Blog