

import React, { useState } from 'react';
import { AiOutlineDingding } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handlers for input changes
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    // Reset form fields after submission
    if (res.ok) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="div flex justify-center">

    <div className='text-center  bg-yellow-50 p-7 flex-col items-center justify-center  mt-24 md:mt-12 text-[#03624c] '>
      <span className='text-4xl text-[#03624c] flex  gap-1 items-center justify-center'>
        <AiOutlineDingding/>
      AI FOUNDRY
      </span>
      <p className='mt-2'>Your one-stop trade copier platform.</p>

      <form className='flex mt-10 flex-col items-center justify-center gap-5' onSubmit={handleSubmit}>
        <input
          className='w-[300px] md:w-[400px] p-2 md:p-4 bg-transparent border-[1px] border-[#03624c] outline-none rounded-md'
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder='Email'
          required
        />

        <input
          className='w-[300px] p-2 md:w-[400px] md:p-4 bg-transparent border-[1px] border-[#03624c] outline-none rounded-md'
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder='Password'
          required
        />

        <div className="remember">
          <p className='text-start text-[#03624c] '>Forgot password?</p>
        </div>

        <Link to="/"> <button className=' text-gray-100 bg-[#03624c] w-[300px] md:w-[400px] p-2 md:p-4 rounded-md' type='submit'>
          Login
        </button>
        </Link>
      </form>

      <p className='link mt-3 text-[#03624c]'>
        Don't have an account? <Link to="/register"><span className='text-my-100 font-medium'>Register</span></Link>
      </p>

      <p className='text-[#03624c]'>© 2024 Bilsco. All Rights Reserved.</p> 
    </div>
    </div>
  );
};

export default Login;
