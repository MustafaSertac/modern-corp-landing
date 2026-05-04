import React from 'react'

const Hero = () => {
  return (
   <div className="relative w-full h-[80vh] overflow-hidden bg-[#1f242c] flex flex-col justify-center" data-aos="fade-up">
    <div className='relative z-10 w-[80%] mx-auto grid grid-cols-1 gap-4 items-center'>
        {/*Text Comment */}
    <div data-aos="fade-right" data-aos-delay="100">
        {/*Title */}
        <h1 className='text-4xl md:text-7xl font-bold text-white'>Crafting your digital 
        <br></br>story with passion</h1>
    </div>
    {/*Description */}
       <p className='max-w-150 ml-0 md:ml-12 md:mt-10 mt-5 text-sm md:text-base font-semibold'>
        Payment solutions enable businesses to accept payments 
        Payment solutions enable businesses to accept payments from customers
         conveniently securely from customers conveniently and securely.
        </p>
        <button className="bg-[#1f242c] px-8 py-3 rounded-full mt-10 ml-0 md:ml-12 text-white font-semibold cursor-pointer hover:bg-[#9f7c2d] transition-all duration-300 outline-2 outline-gray-300 w-fit">
  Discover More
</button> </div>
<div className='absolute right-48 top-[12vh] hidden lg:block z-0' data-aos="zoom-in-left" data-aos-delay="200">

    <img src="/images/hero.png" alt="Hero Image" width={550} height={550}/>
</div>
    
    
    </div>
  )
}

export default Hero