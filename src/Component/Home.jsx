

import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Main from './Main'
import About from './About'
import Testimonials from './Testimonials'
import Questions from './Questions'
import Footer from './Footer'


const Home = () => {
  return (
    <div className='bg-[#f0e9e6] text-[#121212]'> 
      <Navbar/>
      <Hero/>
      <Services/>
      <Main/>
      <About/>
      <Testimonials/>
      <Questions/>
      <Footer/>
    </div>
  )
}

export default Home
