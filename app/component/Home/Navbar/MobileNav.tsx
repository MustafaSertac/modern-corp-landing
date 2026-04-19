import { NAVLINKS } from '@/app/contants/contants'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
  type MobileNavProps = {
    showNav: boolean;
    closeNav: () => void;
  }
const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {

  const navOpenStyles= showNav ? 'translate-x-0' : '-translate-x-[100%]'
  return (
    <div>
      <div className={`fixed ${navOpenStyles} transform transition-transform z-1050 duration-300 inset-0 bg-black opacity-70 w-full h-screen`}></div>

      <div className={`${navOpenStyles} transform transition-transform duration-300 z-1051 text- white top-0 fixed flex flex-col justify-center h-full w-[80%] sm:w-[60%] bg-[#9f7c4e] space-y-6`}>
        {NAVLINKS.map((link) => (
          <Link href={link.url} key={link.id}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.lable}
            </p>
          </Link>
        ))}

        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-6 h-8"
        />
      </div>
    </div>
  )
}

export default MobileNav