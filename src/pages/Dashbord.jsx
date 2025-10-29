import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';

function Dashbord() {
  const isAdmin = useSelector(s => s.userSlice.currentUser.isAdmin)

  if (!isAdmin) return <Navigate to='/' replace />
  return <h1 className='big-title'>dashbord</h1>
}

export default Dashbord