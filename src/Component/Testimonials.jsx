import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { RiGlobalLine } from 'react-icons/ri'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'


const Testimonials = () => {
  return (
    <div className='relative mt-10 mx-auto px-6 bg-[#f0e9e6] sm:px-10 md:px-16 lg:px-24' id='testimonials'>
    <div className="div text-center">
  
    <h2 className='text-3xl sm:text-4xl lg:text-5xl text-[#03624c] mt-10 lg:mt-16 tracking-wide'>
    Testimonials       </h2>
    <p>Testimonies from our clients</p>
    </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
         <div className="flex flex-col items-start  rounded-lg bg-[#f1e4de]  p-6 text-gray-900">
          <div className="di flex gap-3 ">
            <img src={p1} alt=""  className='w-10 h-10 rounded-full'/>
            <div className="divv">
              <span className='font-medium'>Maya</span>
              <p>Product manager</p>
            </div>
          </div>
          <p className='mt-7'>
          We like to roll up our sleeves and help our entrepreneurs in building AI technology, products, strategy, raising money, business development & anything else that is there on their minds.           </p>
        </div>

        <div className="flex flex-col items-start  rounded-lg bg-[#f1e4de]  p-6 text-gray-900">
          <div className="di flex gap-3 ">
            <img src={p2} alt=""  className='w-10 h-10 rounded-full'/>
            <div className="divv">
              <span className='font-medium'>Leilani</span>
              <p>Designer</p>
            </div>
          </div>
          <p className='mt-7'>
          A Chartered Accountant by profession, Sharul cleared all CA exams in first attempt securing All India Merit Rank in every CA exam. Sharul also holds a MBA and an advance diploma in Computer science.           </p>
        </div>

        <div className="flex flex-col items-start  rounded-lg bg-[#f1e4de]  p-6 text-gray-900">
          <div className="di flex gap-3 ">
            <img src={p3} alt=""  className='w-10 h-10 rounded-full'/>
            <div className="divv">
              <span className='font-medium'>Melinda</span>
              <p>Developer</p>
            </div>
          </div>
          <p className='mt-7'>
          biggest Ecommerce company, which exited to Walmart labs for $at $20bn valuation. At flip kart Utkarsha built flipkart's technology stack from early days to its massive size today.          </p>
        </div>

        <div className="flex flex-col items-start  rounded-lg bg-[#f1e4de]  p-6 text-gray-900">
          <div className="di flex gap-3 ">
            <img src={p4} alt=""  className='w-10 h-10 rounded-full'/>
            <div className="divv">
              <span className='font-medium'>Roshni</span>
              <p>Assistant</p>
            </div>
          </div>
          <p className='mt-7'>
          The vastly experienced technologist, architect and mentor is an expert at applying technology relevantly to address critical business challenges and has extensive experience of over 20+ years in developing           </p>
        </div>
        <div className="flex flex-col items-start  rounded-lg bg-[#f1e4de]  p-6 text-gray-900">
          <div className="di flex gap-3 ">
            <img src={p5} alt=""  className='w-10 h-10 rounded-full'/>
            <div className="divv">
              <span className='font-medium'>Shakti</span>
              <p>Producer manager</p>
            </div>
          </div>
          <p className='mt-7'>
          Sharul has had a dynamic leadership career in Multi-billion dollar organizations with a rich mix of M&A, business finance, corporate treasury, FP&A, managing board meetings, ERM and process excellence.           </p>
        </div>

        <div className="flex flex-col items-start  rounded-lg bg-[#f1e4de]  p-6 text-gray-900">
          <div className="di flex gap-3 ">
            <img src={p6} alt=""  className='w-10 h-10 rounded-full'/>
            <div className="divv">
              <span className='font-medium'>Bella</span>
              <p>Marketer</p>
            </div>
          </div>
          <p className='mt-7'>
          Prashanth is a senior technology advisor who works with several startups and non-digital native businesses as a CTO in residence to accelerate their technology and digital roadmaps          </p>
        </div>
         





    <div/>
    </div>
    </div>
    
  )
}

export default Testimonials
