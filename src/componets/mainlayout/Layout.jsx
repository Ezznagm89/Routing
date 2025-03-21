import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from 'react-router-dom'
import Home from '../home/Home';

export default function Layout() {
  return (
    <div className=' bg-[#1ABC9C] '>
      <div className='bg-[#2C3E50]'>
      <div className='container'> 
        <Navbar/>
      </div>
      </div>
   
    <Outlet/>
    
    <Footer/>

    </div>
  )
}
