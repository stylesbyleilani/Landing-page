






import React from 'react';

const Main = () => {
  return (
    <div className="more  flex mb-10 flex-col md:flex-row justify-center items-center w-full gap-10 md:gap-0 mt-20 mx-auto px-4" id='main'>
      <div className="divs flex flex-col gap-7 w-full md:w-1/2 items-center md:items-center">
        <div className="flex items-center justify-between bg-[#03624c] w-[300px]  md:w-[350px] md:h-12 h-11 rounded-md text-gray-50 p-4 transform rotate-[-3deg]">
          <h2 className="text-lg font-semibold">$30,000</h2>
          <p>Interested!</p>
        </div>

        <div className="flex items-center gap-5 justify-between bg-[#ffff] w-[300px] md:w-[350px] md:h-12 h-11 rounded-md text-black p-4">
          <h2 className="text-lg font-semibold">$100,000</h2>
          <p>Investing</p>
        </div>
      </div>

      <div className="miv  p-6 w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl text-[#03624c] font-semibold mb-3">Raise Funding for Your Startup</h2>
        <p className="text-base mb-5">
        AI foundry is a venture studio to build leapfrog AI companies and ecosystem globally. We partner with great entrepreneurs and AI rockstars to build these next generation AI first companies.

</p>
        <button className="px-4 py-2 bg-[#03624c] text-gray-50 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Main;
