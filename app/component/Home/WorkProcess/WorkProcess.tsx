import React from 'react'
import WorkProcessCard from './WorkProcessCard'



const WorkProcess = () => {
    return (
        <div className='pt-24 pb-24 bg-white' data-aos="fade-up">
            <h1 className='text-[#b69974] text-lg text-center font-medium tracking-widest'>
                Work Process
            </h1>
            <h1 className='text-3xl md:text-5xl mt-4 font-bold text-center text-black'>Transforming ideas into easily<br /></h1>
            <div className='w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-14'>
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