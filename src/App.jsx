import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'

function Layer() {
  const isDark = useSelector(state => state.webMode.isDark);
  // console.log(useSelector(s => s));

  useEffect(() => {
    window.addEventListener('keyup', e => {
      if (e.key === 'Escape') localStorage.clear();
    })
  }, [])

  return (
    <div id='body' className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className='max-w-400 mx-auto pb-10'>
        <Navbar />
        <div className='w-17/20 mx-auto mt-10'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layer