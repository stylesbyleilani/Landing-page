import React from 'react'

import Home from './Component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'

const App = () => {
  return (

    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/register' element={<Register/>}></Route>



    </Routes>
   </BrowserRouter>

  )
}

export default App
