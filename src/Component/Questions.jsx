import React from 'react'
import p1 from "../assets/p1.jpg"
import { FaPlus } from "react-icons/fa6";


const Questions = () => {
  return (
    <div className='relative mt-10 bg-[#ffff] mx-auto px-6 sm:px-10 md:px-16 lg:px-24' id='questions'>
    <div className="div text-center">
  
    <h2 className='text-3xl sm:text-4xl lg:text-3xl text-[#03624c] mt-10 lg:mt-16 tracking-wide'>
    Frequently Answered Questions </h2>
    <div className="DIV flex items-center justify-center mt-10 flex-col  md:flex-row gap-5 md:gap-14">
      <div className=" md:w-[500PX] w-[400PX] flex flex-col gap-5 p-7  ">
        <div className="div flex justify-between items-center ">
          <h2 className='font-bold'>Human like AI is next  companies. </h2>
          <div className="btn bg-[#03624c] rounded-full p-1 "><FaPlus className='text-white'/> </div>
        </div>

        <div className="div flex justify-between items-center ">
        <h2 className='font-bold'>Human like AI is next  companies. </h2>
        <div className="btn bg-[#03624c] rounded-full p-1 "><FaPlus className='text-white'/> </div>
        </div>

        <div className="div flex justify-between items-center ">
        <h2 className='font-bold'>Human like AI is next  companies. </h2>
        <div className="btn bg-[#03624c] rounded-full p-1 "><FaPlus className='text-white'/> </div>
        </div>
        <div className="div flex justify-between items-center ">
        <h2 className='font-bold'>Human like AI is next  companies. </h2>
        <div className="btn bg-[#03624c] rounded-full p-1 "><FaPlus className='text-white'/> </div>
        </div>
      </div>

      <div className="bg-[#f0e9e6] mb-10 md:mb-0 w-[300px] flex flex-col py-5  rounded-md items-center justify-center ">
<img src={p1} alt="" className='w-10 h-10 rounded-full' />
<h1 className='font-bold text-lg'>Wanna talk before joining us ?</h1>
<button className='rounded-full mt-5 bg-[#03624c] text-gray-50 w-[190px] h-10'>Subscribe</button>
      </div>
    </div>
    </div>
    </div>

  )
}

export default Questions
