
import React, { useState } from 'react' 
import react from "../assets/react.svg"
import { FiMenu } from "react-icons/fi";
import { AiOutlineDingding } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleNavbar = ()=>{
    setMobileOpen(!mobileOpen)
  }



  return (
     <nav className='sticky  text-gray-300 font-sans top-0 z-50 py-3 backdrop-blur-lg  '>
  <div className="container px-4 mx-auto relative text-sm ">
  <div className="flex justify-between items-center ">
  <div className='flex items-center flex-shirnk-0'>
    <AiOutlineDingding className='text-2xl text-[#03624c]'/>
<span className='text-xl text-[#03624c] font-medium  tracking-tight'>AI FOUNDRY  </span>
  </div>
  <ul className='hidden lg:flex ml-14 space-x-12 font-medium'>

<ul className='hidden lg:flex ml-14 space-x-12 font-medium'>
  <li className='text-neutral-950'><a href="#home">Blog</a></li>
  <li className='text-gray-900'><a href="#about">About Us</a></li>
  <li className='text-gray-900'><a href="#services">Services</a></li>
  <li className='text-gray-900'><a href="#testimonials">Benefits</a></li>
</ul>


  </ul>
  <div className="hidden lg:flex justify-center space-x-12 item-center">
   <Link to="/register"> <a href="#" className='font-medium border-none  bg-[#03624c] text-white  py-2 px-3 border '> Get Started</a></Link>
  </div>
<div className="lg:hidden md:flex flex-col justify-end">
  <button onClick={toggleNavbar} className='text-black'>
    {mobileOpen ? "X" : <FiMenu className='text-black border-none'/>}
  </button>
</div>
  </div >
  {mobileOpen && (
    <div className=' fixed right-0 z-20 text-gray-100 bg-[#f0e9e6] w-full p-12 flex flex-col lg:hidden '>
  <ul>

<ul className=''>
  <li className='text-neutral-950 py-1 font-medium'><a href="#home">Blog</a></li>
  <li className='text-gray-900 py-1 font-medium'><a href="#about">About Us</a></li>
  <li className='text-gray-900 py-1 font-medium'><a href="#services">Services</a></li>
  <li className='text-gray-900 py-1 font-medium'><a href="#testimonials">Benefits</a></li>
</ul>



  </ul>
  <div className="flex space mt-3 x-6">
    <Link to="/register"><a href="#" className='font-medium border-none  bg-[#03624c] text-white  py-2 px-3 border '> Get Started</a></Link>

  </div>
    </div>
  )}
  </div>

     </nav>
  )
}

export default Navbar
