import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { changeMode, selectIsDark } from '../states/webModeSlice';

import { CartIcon, DarkModeIcon } from '../assets/icons';
import CartPopup from './CartPopup';
import { selectShowPopup, toggleShowPopup } from '../states/shopingCartSlice';
import { selectIsAdmin, selectIsLogged } from '../states/userSlice';

function Navbar() {
    const dispatch = useDispatch();
    const isAdmin = useSelector(selectIsAdmin)
    const isLogged = useSelector(selectIsLogged)
    const isDark = useSelector(selectIsDark)
    const showPopup = useSelector(selectShowPopup)


    return (
        <div className='relative dark:bg-gray-400 bg-gray-200 rounded-b-2xl'>
            <nav className='flex items-center justify-between h-20 w-17/20 mx-auto'>
                <div className='flex items-center gap-5'>
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-cyan-700 nav-link' : 'nav-link'}
                        to='/'
                    >Home</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-cyan-700 nav-link' : 'nav-link'}
                        to='/products'
                    >Products</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-cyan-700 nav-link' : 'nav-link'}
                        to='/login'
                    >Login</NavLink>
                    {isAdmin ?
                        <NavLink 
                        className={({ isActive }) => isActive ? 'text-cyan-700 nav-link' : 'nav-link'}
                         to='dashboard'
                         >Dashboard</NavLink> :
                        ''}
                </div>

                <div className='flex items-center gap-4 relative'>
                    <button>{isLogged ? isAdmin ? 'Admin' : 'User' : 'Login'}</button>

                    <div>
                        <button
                            className='bg-transparent p-0'
                            id='show-popup-btn'
                            onClick={() => dispatch(toggleShowPopup())}
                        >
                            <CartIcon className='cart-icon text-black' />
                        </button>

                        <CartPopup
                            className={showPopup ? '' : 'hidden'}
                        />
                    </div>

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