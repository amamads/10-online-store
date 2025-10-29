// import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { changeMode } from '../states/webModeSlice';

import { CartIcon, DarkModeIcon } from '../assets/icons';

function Navbar() {
    const dispatch = useDispatch();
    const { currentUser: { isAdmin }, isLogged } = useSelector(state => state.userSlice);
    const isDark = useSelector(state => state.webMode.isDark)

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

                <div className='flex items-center gap-4'>
                    <button>{isLogged ? isAdmin ? 'Admin' : 'User' : 'Login'}</button>

                    <NavLink
                        className={({ isActive }) => isActive ? 'cart-icon text-cyan-700' : 'cart-icon'}
                        to='/shoping-cart'
                    >
                        <CartIcon className='w-6' />
                    </NavLink>

                    <button
                        onClick={() => dispatch(changeMode())}
                        className={`bg-transparent hover:scale-110 p-0 duration-300 transition-transform ${isDark ? '' : 'rotate-270'}`}
                    >
                        <DarkModeIcon />
                    </button>
                </div>
            </nav>
        </div>
    )
}



export default Navbar