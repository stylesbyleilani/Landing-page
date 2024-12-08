


import React from 'react';
import art from '../assets/Art.jpeg';
import { FaArrowRight, FaLocationArrow } from 'react-icons/fa';
import p4 from '../assets/p4.jpg'
import p6 from '../assets/p6.jpg'
import p1 from "../assets/p1.jpg"

const Hero = () => {
  return (
    <div className='mt-5 flex justify-center items-center' id='hero' >
      <div className="hero-contents w-full max-w-6xl">
        {/* Button and Image Section */}
        <div className="img-btn flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10">
          <button className='bg-[#EDEDED] text-center md:p-2 p-2 md:h-12 w-full md:w-[350px] rounded-full'>
            Empowering with AI, making projects seamless
          </button>
          <div className="img-container  flex md:mb-16">
            <img src={p1} alt="" className='w-12 h-12 md:w-16 md:h-16 rounded-full' />
            <FaLocationArrow className='text-[#03624c]'/>

          </div>
        </div>

        {/* Title and Text Section */}
        <div className="relative z-10 text-center mt-8">
          <h1 className="text-4xl font-medium sm:text-6xl lg:text-7xl tracking-wide text-[#03624c]">
            Empowering AI Innovators to Build and Collaborate
          </h1>
          <p className="mt-7 p-3 md:p-5 text-base sm:text-lg text-center text-[#03624c] max-w-4xl mx-auto">
          In the AI age, learning is not about remembering answers (which ChatGPT can do easily), but rather learning to learn. In an age, where knowledge and information will be everywhere          </p>
        </div>

        {/* Email and Image Section */}
        <div className="more flex flex-col md:flex-row items-center justify-center gap-6 mt-8 md:gap-10">
          <div className="img-container md:mb-16 ">
          <FaLocationArrow className='text-[#03624c] transform rotate-[160deg]'/>
            <img src={p6} alt="" className='w-12 h-12 md:w-16 md:h-16 rounded-full' />
          </div>

          <div className="email-input-container bg-[#ededed] w-full md:w-[600px] h-14 flex justify-between items-center rounded-md">
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='outline-none p-2 w-full bg-[#ededed] flex-grow rounded-md h-full'
            />

            {/* <button className='h-full  text-gray-50 bg-[#03624c] rounded-md'>
              Ask the Community
            </button> */}
                      <div className="details flex items-center text-lg font-medium gap-3 w-auto p-3 bg-[#03624c] text-gray-50">
            <button>Community</button>
            <FaArrowRight />
          </div>
          </div>

          <div className="img-container md:mt-16">
            <img src={p4} alt="" className='w-12 h-12 md:w-16 md:h-16 rounded-full' />
            <FaLocationArrow className='text-[#03624c]'/>


          </div>
        </div>

        {/* Sponsors Section */}
        <div className="green bg-[#03624c]  mt-8 text-gray-50 flex justify-between h-20  items-center  rounded-sm px-5">
          <div className="logo-container text-center">
            <h1 className='font-bold text-2xl md:text-3xl'>CNN</h1>
          </div>
          <div className="logo-container text-center">
            <h1 className='font-bold text-2xl md:text-3xl'>INC.</h1>
          </div>
          <div className="logo-container text-center">
            <h1 className='font-bold text-2xl md:text-3xl'>FORBES</h1>
          </div>
          <div className="logo-container text-center">
            <h1 className='font-bold text-2xl md:text-3xl'>Yahoo!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

