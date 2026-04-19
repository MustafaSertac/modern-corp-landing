import React from 'react'
import { BiSolidBusiness } from 'react-icons/bi'

const Logo = () => {
    return (
        <div className="flex items-center space-x-2">

            <div className="w-10 h-10 bg-[#b69974] rounded-full flex items-center justify-center">
                <BiSolidBusiness className="text-white w-6 h-6" />
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-[#d5b68c] font-bold'>Corp Box</h1>
        </div>
    )
}

export default Logo