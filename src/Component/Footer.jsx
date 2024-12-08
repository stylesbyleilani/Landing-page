import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa"; 
import { AiOutlineDingding } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='relative mt-8 font-serif  text-black mx-auto px-4 sm:px-6 md:px-16 lg:px-24' id='footer'>
      <div className="pooter-content flex flex-col md:flex-row gap-4 md:justify-between p-2 md:p-7 items-center">
        
        <div className="pooter-content-left text-center md:text-left">
          <div className="div flex items-center gap-1">
          <AiOutlineDingding className='text-xl text-[#03624c]'/>
          <h3 className='text-[#03624c]'>AI FOUNDRY
          </h3>
          </div>
          <div className="pooter-social-icons flex justify-center md:justify-start gap-2 md:gap-5 mt-2">
            <FaFacebookSquare/>
            <FaTwitter/>
            <FaLinkedin/>
          </div>
        </div>
        
        <div className="pooter-content-center text-center md:text-left" id='pooter'>
          <h2 className="text-lg font-bold mb-2 text-[#03624c] ">AI FOUNDRY </h2>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Benefit</li>
          </ul>
        </div>
        
        <div className="pooter-content-right text-center md:text-left">
          <h2 className="text-lg font-bold mb-2 text-[#03624c] ">GET IN TOUCH</h2>
          <ul className="space-y-1">
            <li>0015910621</li>
            <li>aifoundry@gmail.com</li>
          </ul>
        </div>
        
      </div>
      
      <div className="text-center mt-4">
        <hr className="border-[#03624c] " />
        <p className="pooter-copyright mt-4">
          © 2024 createdbyleilani. All Rights Reserved.
        </p> 
      </div>
      
    </div>
  )
}

export default Footer
