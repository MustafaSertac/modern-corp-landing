import React from 'react'
import { BiSolidBusiness } from 'react-icons/bi'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import WorkProcess from './WorkProcess/WorkProcess'
import Project from './Project/Project'
import Blog from './Blog/Blog'

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero/>
            <About/>
            <Services/>
            <WorkProcess/>
            <Project/>
            <Blog></Blog>
      
        </div>
    )
}

export default Home