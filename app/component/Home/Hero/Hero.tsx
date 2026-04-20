import React from 'react'

const Hero = () => {
  return (
   <div className="w-full h-[80vh] bg-[#1f242c] flex flex-col justify-center">
    <div className='w-[80%] mx-auto grid grid-cols-1 gap-4 items-center'>
        {/*Text Comment */}
    <div>
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
<div className='absolute top-0 right-48 hidden lg:block '>

    <img src="/images/hero.png" alt="Hero Image" width={550} height={550} />
</div>
    
    
    </div>
  )
}

export default Hero