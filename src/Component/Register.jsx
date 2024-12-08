

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDingding } from "react-icons/ai";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset form after submission
    setName("");
    setEmail("");
    setPassword("");

    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="div flex justify-center">
    <div className='text-center  bg-yellow-50 p-7 rounded-mdflex-col items-center justify-center mt-24 md:mt-12 text-[#03624c]'>
      <span className='text-4xl text-[#03624c] flex gap-1 justify-center items-center'>
        <AiOutlineDingding/>
      AI FOUNDRY

      </span>
      <p className='mt-2'>Your one-stop trade copier platform.</p>

      <form className='flex mt-10 flex-col items-center justify-center gap-5' onSubmit={handleSubmit}>
        <input
          className='w-[300px] md:w-[400px] text-gray-900 p-2 md:p-4 bg-transparent border-[1px] border-[#03624c] outline-none rounded-md'
          type="text"
          value={name}
          onChange={handleName}
          placeholder='Username'
          required
        />

        <input
          className='w-[300px] md:w-[400px] p-2 md:p-4  bg-transparent border-[1px] border-[#03624c] outline-none rounded-md'
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
          <p className='text-start'>Forgot password?</p>
        </div>

          <Link to="/"><button className='border-gray-300 text-gray-100 bg-[#03624c] w-[300px] rounded-md md:w-[400px] p-2 md:p-4' type='submit'>
          Register
        </button> 
        </Link>
      </form>

      <p className='link mt-3'>
        Already have an account? <Link to="/login"><span className='text-my-100 font-medium'>Login</span></Link>
      </p>

      <p>© 2024 Billsco. All Rights Reserved.</p>
    </div>
    </div>
  );
};

export default Register;



