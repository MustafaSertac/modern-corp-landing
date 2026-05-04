import React from 'react'
import { FaBullseye } from 'react-icons/fa'
import { HiOutlineChartBar } from 'react-icons/hi'

const AboutProgress = () => {
    const data = [{
        id: 1,
        title: "Digital Marketing",
        percent: 95,
        icon: <FaBullseye className='text-white text-3xl'></FaBullseye>
    },
    {
        id: 2,
        title: "Digital Business",
        percent: 85,
        icon: <HiOutlineChartBar className='text-white text-3xl'></HiOutlineChartBar>
    }


    ]
    return (
        <div className='space-y-8 py-6 md:py-10'>
            {data.map((item, index) => (
                <div
                    key={item.id}
                    className='flex flex-col gap-4 rounded-xl bg-white p-4 shadow-md sm:flex-row sm:items-center sm:gap-6 sm:p-6'
                    data-aos="fade-up"
                    data-aos-delay={index * 120}
                >
                    <div className='flex items-center justify-center rounded-md bg-[#b58b58] p-4 sm:p-5'>
                        {item.icon}
                    </div>
                    <div className='flex-1'>
                        <div className='mb-2 flex items-center justify-between'>
                            <h3 className='font-semibold text-gray-800 text-lg'>
                                {item.title}
                            </h3>

                            <p className='font-semibold text-gray-800'>
                                {item.percent}
                            </p>

                        </div>

                        <div className='w-full h-2 bg-gray-300 rounded-full overflow-hidden'>
                            <div
                                className='h-full bg-[#b58b58] rounded-full'
                                style={{ width: `${item.percent}%` }}
                            />
                        </div>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default AboutProgress