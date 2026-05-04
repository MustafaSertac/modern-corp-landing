import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import WorkProcess from './WorkProcess/WorkProcess'
import Project from './Project/Project'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import ScrollToTop from '../Helper/ScrollToTop/ScrollToTop'


const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero/>
            <About/>
            <Services/>
            <WorkProcess/>
            <Project/>
            <Blog></Blog>
            <Contact/>
            <Footer/>
            <ScrollToTop/>
      
        </div>
    )
}

export default Home