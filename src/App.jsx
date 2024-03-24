import { useState } from 'react'
import Login from './page/login'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Register from './page/register'
import HousePage from './page/nestedPages/house'
import Population from './page/nestedPages/population'
import Youth from './page/nestedPages/youth'
import Zone from './page/nestedPages/zone'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/house' element={<HousePage/>}> </Route>
        <Route path='/population' element={<Population/>}></Route>
        <Route path='/youth' element={<Youth/>}></Route>
        <Route path='/zone' element={<Zone/>}></Route>
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
