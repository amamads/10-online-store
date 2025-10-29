// import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { changeMode } from '../states/webModeSlice';
function Navbar() {
    const dispatch = useDispatch();
    const { currentUser: { isAdmin }, isLogged } = useSelector(state => state.userSlice);

    return (
        <div className='dark:bg-gray-400 bg-gray-200 rounded-b-2xl'>
            <nav className='flex items-center justify-between h-20 w-17/20 mx-auto'>
                <div className='flex items-center gap-5'>
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-cyan-700 nav-link' : 'nav-link'}
                        to='/'>Products</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-cyan-700 nav-link' : 'nav-link'} to='/login'>Login</NavLink>
                    {isAdmin ? <NavLink className={({ isActive }) => isActive ? 'text-cyan-700 nav-link' : 'nav-link'} to='dashbord'>Dashbord</NavLink> : ''}
                </div>

                <div className='flex items-center flex-row-reverse'>
                    <button
                        onClick={() => dispatch(changeMode())}
                        className='bg-transparent hover:scale-110 duration-300 transition-transform'>
                        <img src="dark-mode.svg" alt="change mode" className='w-8' />
                    </button>

                    <button>{isLogged ? isAdmin ? 'Admin' : 'User' : 'Login'}</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar