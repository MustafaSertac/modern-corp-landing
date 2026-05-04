import React from 'react'
import AboutProgress from './AboutProgress'

const About = () => {
    return (
        <div className='bg-white pb-16 pt-16 md:pb-20 md:pt-20' data-aos="fade-up">
            <div className='mx-auto grid w-[90%] grid-cols-1 gap-10 sm:w-[86%] lg:w-[80%] lg:grid-cols-2 lg:gap-6'>
                {/*Image Content */}
                <div className="relative flex items-center justify-center" data-aos="zoom-in" data-aos-delay="100">

                    <img
                        src="/images/a3.png"
                        alt="About Image"
                        className="w-64 animate-spin sm:w-80 md:w-[29rem] [animation-duration:20s]"
                        data-aos="zoom-in"
                        data-aos-delay="120"
                    />

                    <img
                        src="/images/a4.png"
                        alt="About Image"
                        className="absolute left-1/2 top-1/2 z-10 w-44 -translate-x-1/2 -translate-y-1/2 rounded-4xl sm:w-56 md:w-[23rem]"
                        data-aos="zoom-in-up"
                        data-aos-delay="180"

                    />

                </div>
                <div className='px-1 sm:px-3 lg:p-5' data-aos="fade-left" data-aos-delay="150">
                    <h1 className='text-blue-700 text-lg font-medium tracking-widest'>About Us</h1>
                    <h1 className='mt-4 text-3xl font-bold text-black md:text-5xl'>Innovative solutions for digital success</h1>
                    <p className='mt-5 text-sm font-semibold leading-loose text-black md:ml-8 md:mt-8 md:text-base'>
                    Payment solutions enable businesses to accept payments Payment solutions 
                    enable businesses to accept payments from customers conveniently securely from customers 
                    conveniently and securely.</p>
                    <AboutProgress  ></AboutProgress>
                </div>



            </div>

        </div>
    )
}

export default About