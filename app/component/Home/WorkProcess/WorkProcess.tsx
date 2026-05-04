import React from 'react'
import WorkProcessCard from './WorkProcessCard'



const WorkProcess = () => {
    return (
        <div className='bg-white pb-20 pt-20 md:pb-24 md:pt-24' data-aos="fade-up">
            <h1 className='text-[#b69974] text-lg text-center font-medium tracking-widest'>
                Work Process
            </h1>
            <h1 className='mt-4 px-4 text-center text-3xl font-bold text-black md:text-5xl'>Transforming ideas into easily<br /></h1>
            <div className='mx-auto mt-12 grid w-[90%] grid-cols-1 gap-x-6 gap-y-10 sm:w-[86%] md:mt-16 lg:w-[80%] lg:grid-cols-2 lg:gap-y-14'>
                <WorkProcessCard number="01" title="Creative Craze" isExtraClass aosDelay={0} />
                <WorkProcessCard number="02" title="Brand Boost" aosDelay={120} />
                <WorkProcessCard number="03" title="Media Minds" isExtraClass aosDelay={240} />
                <WorkProcessCard number="04" title="Creative Craze" aosDelay={360} />
            </div>
        </div>
        /*  Work Process Cards */


    )
}

export default WorkProcess