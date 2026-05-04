"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const NavContainer = () => {
const [showNav, setShowNav] = useState<boolean>(false);

  const openNavHandler = (): void => setShowNav(true);
  const closeNavHandler = (): void => setShowNav(false);
  
  return (
    <div className='bg-[#1f242c]'>
    <Nav openNav={openNavHandler}></Nav>
    <MobileNav showNav={showNav} closeNav={closeNavHandler}></MobileNav>
    
    </div>
 
  )
}

export default NavContainer