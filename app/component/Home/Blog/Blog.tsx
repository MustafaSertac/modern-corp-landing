import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div id="blog" className='scroll-mt-24 bg-white pb-16 pt-16 md:pb-20 md:pt-20' data-aos="fade-up">
        <h2 className='text-[#b69974] text-center text-lg font-medium tracking-widest'>Blog</h2>
        <h1 className='mt-4 px-4 text-center text-3xl font-bold text-black md:text-5xl'>
        Latest news & articles: <br/>
        From Our Blog
        </h1>
        <div className='mx-auto mt-8 grid w-[90%] grid-cols-1 gap-6 sm:w-[86%] md:grid-cols-2 lg:mt-10 xl:w-[80%] xl:grid-cols-3'>
          <BlogCard image="/images/b1.png" title="The Future of Web Development: Trends to Watch in 2024" aosDelay={0}></BlogCard>
          <BlogCard image="/images/b2.png" title="10 Essential Tips for Modern Web Design" aosDelay={120}></BlogCard>
          <BlogCard image="/images/b3.png" title="How to Build a Scalable React Application" aosDelay={240}></BlogCard>
        </div>
    </div>
  )
}

export default Blog