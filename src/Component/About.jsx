import React from 'react'
import { RiGlobalLine } from 'react-icons/ri'; 
import video from '../assets/vid.mp4'
// import video from '../assets/p4.jpg'
import { MdOutlineTableView } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { PiUniteSquareBold } from "react-icons/pi";



const About = () => {
  return (



     <div className='relative mt-10 bg-[#ffff] mx-auto px-6 sm:px-10 md:px-16 lg:px-24' id='about'>
       <div className="text-center">
        <h2 className='text-3xl sm:text-4xl lg:text-4xl   font-medium text-[#03624c] mt-10 lg:mt-16 tracking-wide'>
           Everything you need to take your startup to the next level 
         </h2>
      <p className='mt-4 text-sm sm:text-base lg:text-lg'>
        We like to roll up our sleeves and help our entrepreneurs in building AI technology, products, strategy, raising money, business development & anything else that is there on their minds.         </p> 
      </div>  


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
  <div className="flex flex-col items-center rounded-lg bg-[#ededed] p-6 text-gray-900">
    <MdOutlineTableView className='text-3xl mb-4 text-green-600' />
    <h1 className='text-xl font-medium mb-3'>Networking</h1>
    <p className='mb-5'>
    Vijay Chandru is an academic entrepreneur having spent nearly 40 years as an academician. After completeing his PhD from MIT he has been a tenured professor at Purdue University for a decade    </p>
  </div>

  <div className="flex flex-col items-center rounded-lg bg-[#ededed] p-6 text-gray-900">
    <BsQrCode className='text-3xl mb-4 text-purple-600' />
    <h1 className='text-xl font-medium mb-3'>Opportunities</h1>
    <p className='mb-5'>
    Maker, quadrupled the world's digital maps corpus, bringing maps to 4 billion in 187 countries that had no maps before. His startup was Google’s first acquisition in 2002 after which he co-founded Google India    </p>
  </div>

  <div className="flex flex-col items-center rounded-lg bg-[#ededed] p-6 text-gray-900">
    <HiSquare3Stack3D className='text-3xl mb-4 text-teal-300' />
    <h1 className='text-xl font-medium mb-3'>Collaboration</h1>
    <p className='mb-5'>
    Dr. Jain received his Ph.D. from the Max Planck Institute in Germany and his post-doc from NYU where he worked with Yann LeCun.

</p>
  </div>

  <div className="flex flex-col items-center rounded-lg bg-[#ededed] p-6 text-gray-900">
    <PiUniteSquareBold className='text-3xl mb-4 text-blue-500' />
    <h1 className='text-xl font-medium mb-3'>Community</h1>
    <p className='mb-5'>
    Alumni Centre Bengaluru, IITACB. Masters in Mathematics from KTH, Stockholm with a Minor in Machine Learning. Alumnus of IIT Roorkee    </p>
  </div>

  {/* Add more cards as needed */}
</div>
  <div className="div text-center">
  
  <h2 className='text-3xl sm:text-3xl lg:text-2xl font-medium text-[#03624c] mt-10 lg:mt-16 tracking-wide'>
  "Here's a Message from our Founder "</h2>
  <div className="vid flex justify-center">


<video autoPlay
  loop
  muted
  className='rounded-lg  shadow-gray-900 shadow-md mx-2 my-4  '
>
  <source src={video} type='video/mp4' />
  Your browser does not support the video tag.
</video>



  </div>
  </div>






      </div>
      )
}

export default About
