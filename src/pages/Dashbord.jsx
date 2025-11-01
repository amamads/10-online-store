import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';
import { selectIsAdmin } from '../states/userSlice';

function Dashbord() {
  const isAdmin = useSelector(selectIsAdmin)

  if (!isAdmin) return <Navigate to='/' replace />
  return <h1 className='big-title'>dashbord</h1>
}

export default Dashbord