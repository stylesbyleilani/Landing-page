import React from 'react';
import { RiGlobalLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className='relative mt-10 mx-auto px-4 md:px-8 lg:px-12'  id='services' >
      <div className="text-center">
        <h2 className='text-3xl sm:text-5xl  font-medium lg:text-4xl text-[#03624c] mt-10 lg:mt-20 tracking-wide'>
          Why Become a Member?
        </h2>
        <p className='mt-3 max-w-3xl mx-auto'>
        We bring data, talent, domain and research apart from the capital to help you create the leapfrog AI venture all the way from Idea to scale.

</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className="flex flex-col justify-center gap-3 bg-[#03624c] p-5 text-gray-50 rounded-md">
          <RiGlobalLine className='text-3xl mt-3' />
          <h1 className='text-xl font-medium'>Networking</h1>
          <p>This way we aim to grow a cluster of 15-17 AI first companies  over this AI decade.</p>
          <div className="details flex items-center text-lg font-medium gap-2 w-32 p-2 bg-[#ededed] text-[#03624c]">
            <button>Details</button>
            <FaArrowRight />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[#ededed] p-5 text-[#03624c] rounded-md">
          <RiGlobalLine className='text-3xl mt-3' />
          <h1 className='text-xl font-medium'>Exclusive Resourses</h1>
          <p>Once the idea reaches the product market fit, we help launch it as a company .</p>
          <div className="details flex items-center text-lg font-medium gap-2 w-32 p-2 bg-[#03624c] text-[#ededed]">
            <button>Details</button>
            <FaArrowRight />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[#ededed] p-5 text-[#03624c] rounded-md">
          <RiGlobalLine className='text-3xl mt-3' />
          <h1 className='text-xl font-medium'>Mentorship Program</h1>
          <p> We work with leading entrepreneurs, universities or partners/govt. to trigger potentially leapfrog ideas in the chosen sectors.</p>
          <div className="details flex items-center text-lg font-medium gap-2 w-32 p-2 bg-[#03624c] text-[#ededed]">
            <button>Details</button>
            <FaArrowRight />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[#ededed] p-5 text-[#03624c] rounded-md">
          <RiGlobalLine className='text-3xl mt-3' />
          <h1 className='text-xl font-medium'>Prototype</h1>
          <p>We help prototype the research to create a product with our resources and network of EIRs (Entrepreneurs in Residence) and TIRs (Technologists in Residence).</p>
          <div className="details flex items-center text-lg font-medium gap-2 w-32 p-2 bg-[#03624c] text-[#ededed]">
            <button>Details</button>
            <FaArrowRight />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[#ededed] p-5 text-[#03624c] rounded-md">
          <RiGlobalLine className='text-3xl mt-3' />
          <h1 className='text-xl font-medium'>Product to market</h1>
          <p>Once the idea reaches the product market fit, we help launch it as a company along with entrepreneurs in residence, the team & strategic investors/VCs.</p>
          <div className="details flex items-center text-lg font-medium gap-2 w-32 p-2 bg-[#03624c] text-[#ededed]">
            <button>Details</button>
            <FaArrowRight />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[#ededed] p-5 text-[#03624c] rounded-md">
          <RiGlobalLine className='text-3xl mt-3' />
          <h1 className='text-xl font-medium'>Capital</h1>
          <p>AI companies have distinct need for smart capital, which understands the whole ecosystem from data, talent.</p>
          <div className="details flex items-center text-lg font-medium gap-2 w-32 p-2 bg-[#03624c] text-[#ededed]">
            <button>Details</button>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;