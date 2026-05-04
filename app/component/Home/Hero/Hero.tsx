import React from 'react'

const Hero = () => {
  return (
   <div id="home" className="w-full min-h-screen scroll-mt-20 bg-[#1f242c] flex  overflow-hidden">
  <div className='w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8  relative'>
    
    {/* SOL TARAF: Yazı Alanı */}
    <div className='z-10 py-60 lg:py-40'>
      <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight' data-aos="fade-up">
        Crafting your digital 
        <br />
        <span className="text-[#d4a373]">story with passion</span>
      </h1>
      
      <p data-aos="fade-up" data-aos-delay="180" className='text-gray-300 max-w-lg mt-8 text-sm md:text-base font-medium leading-relaxed'>
        Payment solutions enable businesses to accept payments conveniently and securely from customers, 
        streamlining your digital growth with every transaction.
      </p>

      <button data-aos="fade-up" data-aos-delay="300" className="bg-transparent border-2 border-white/30 px-8 py-3 rounded-full mt-10 text-white font-semibold cursor-pointer hover:bg-[#9f7c2d] hover:border-[#9f7c2d] transition-all duration-300 w-fit block">
        Discover More
      </button>
    </div>

    {/* SAĞ TARAF: Görsel Alanı */}
    {/* lg:static sayesinde mobilde alt alta, masaüstünde yan yana durur */}
   <div className='relative hidden lg:flex lg:justify-end' data-aos="fade-left" data-aos-delay="200">
  {/* Arka plandaki o kavisli yapıyı (varsa) görselin içine veya hemen arkasına koyabilirsin */}
  <div className="relative">
      <img 
      src="/images/hero.png" 
      alt="Hero Image" 
      className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain z-10 relative" 
    />
    
  </div>
</div>

  </div>
</div>
  )
}

export default Hero