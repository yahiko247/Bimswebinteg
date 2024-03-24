import { useState } from 'react'
import Login from './page/login'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Register from './page/register'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
