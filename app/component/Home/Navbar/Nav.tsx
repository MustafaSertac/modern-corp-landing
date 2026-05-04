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
        <div className="relative z-20 h-[10vh] sm:h-[11vh] lg:h-[12vh] lg:mt-6">
            <div className="mx-auto bg-transparent flex h-full w-[92%] items-center justify-between xl:w-[80%]">

                <Logo></Logo>
                <div className='hidden h-[9vh] items-center space-x-7 bg-white pl-4 pr-2 lg:flex xl:space-x-10'>
                    {NAVLINKS.map((link) => (
                        <Link href={link.url}
                            key={link.id}
                            className='text-[#202020] hover:text-[#f7ab49] font-semibold transition-all duration-200'>
                            <p>{link.lable}</p>
                        </Link>
                    ))}
                    <button className='h-full bg-[#f7ab49] px-3 text-sm font-bold text-white transition-colors hover:bg-[#d9973f] xl:px-4'>
                        Craete Account
                    </button>


                </div>
                <div onClick={() => {
                    
                    openNav()
                }} className='lg:hidden'>
                    <HiBars3BottomRight className='h-8 w-8 cursor-pointer text-[#dfc39f] sm:h-9 sm:w-9'></HiBars3BottomRight>
                </div>
            </div>
        </div>
    )
}

export default Nav