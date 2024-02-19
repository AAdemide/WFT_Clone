import { useState } from 'react'
import './App.css'
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Tester from "./pages/Tester"
import ToggleMenu from './components/ToggleMenu'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='dark size-full'>
      <div className="bg-neutral-100 dark:bg-[#201d1d] size-full">
          <BrowserRouter>
            {/* <ToggleMenu> */}
                <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/tester" element={<Tester/>}/>
              </Routes>
            {/* </ToggleMenu> */}
          
          </BrowserRouter>
      </div>
     
    </div>
  )
}

export default App
