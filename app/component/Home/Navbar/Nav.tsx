import React from 'react'
import Logo from '../../Helper/Logo'
import { NAVLINKS } from '@/app/contants/contants'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

type NavProps = {
    openNav: () => void
}
const Nav = ({ openNav }: NavProps) => {
    return (
        <div className="h-[12vh] relative z-10 lg:mt-8">
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">

                <Logo></Logo>
                <div className='hidden lg:flex bg-white h-[10vh] md:pl-4 items-center space-x-10 '>
                    {NAVLINKS.map((link) => (
                        <Link href={link.url}
                            key={link.id}
                            className='text-[#202020] hover:text-[#f7ab49] font-semibold transition-all duration-200'>
                            <p>{link.lable}</p>
                        </Link>
                    ))}
                    <button className='h-full p-3 bg-[#f7ab49] cursor-pointer text-white font-bold'>Craete Account</button>


                </div>
                <div onClick={() => {
                    
                    openNav()
                }} className='lg:hidden'>
                    <HiBars3BottomRight className='w-9 h-9 text-[#dfc39f] cursor-pointer'></HiBars3BottomRight>
                </div>
            </div>
        </div>
    )
}

export default Nav