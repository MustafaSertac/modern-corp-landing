import React from 'react'
import AboutProgress from './AboutProgress'

const About = () => {
    return (
        <div className='pt-16 pb-16 bg-white'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/*Image Content */}
                <div className="relative flex justify-center items-center">

                    <img
                        src="/images/a3.png"
                        alt="About Image"
                        className="w-75 md:w-125 animate-spin [animation-duration:20s]"
                    />

                    <img
                        src="/images/a4.png"
                        alt="About Image"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 md:w-93 rounded-4xl z-10"

                    />

                </div>
                <div className='p-5 '>
                    <h1 className='text-blue-700 text-lg font-medium tracking-widest'>About Us</h1>
                    <h1 className='text-black text-3xl md:text-5xl font-bold mt-4'>Innovative solutions for digital success</h1>
                    <p className='ml-0 md:ml-12 md:mt-10 mt-5 text-black text-sm md:text-base font-semibold leading-loose'>
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