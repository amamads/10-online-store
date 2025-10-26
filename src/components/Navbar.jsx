import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router'
function Navbar() {
    const user = useSelector(state => state.user.user)

    function clickFn() {
        console.log(user);
    }
    return (
        <div className='bg-gray-400 rounded-b-2xl'>
            <nav className='flex items-center justify-between h-20 w-17/20 mx-auto'>
                <div className='flex items-center gap-5'>
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-cyan-700 nav-link' : 'nav-link'}
                        to='/'>Products</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-cyan-700 nav-link' : 'nav-link'} to='/login'>Login</NavLink>
                    {user.isAdmin ? <NavLink className={({ isActive }) => isActive ? 'text-cyan-700 nav-link' : 'nav-link'} to='dashbord'>Dashbord</NavLink> : ''}
                </div>

                <button onClick={clickFn}>{user.username ?? 'Login'}</button>
                {/* <button onClick={clickFn}>{user.username?? 'yahoho'}</button> */}
            </nav>
        </div>
    )
}

export default Navbar