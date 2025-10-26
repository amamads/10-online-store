import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
function Layer() {
  return (
    <div className='max-w-400 mx-auto pb-10'>
      <Navbar />
      <div className='w-17/20 mx-auto mt-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layer