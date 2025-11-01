import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartPopupProduct from './CartPopupProduct'
import { Link } from 'react-router'
import { selectCartItems, selectShowPopup, toggleShowPopup } from '../states/shopingCartSlice'

function CartPopup({ className }) {
  const cartItems = useSelector(selectCartItems)
  const showPopup = useSelector(selectShowPopup)

  const dispatch = useDispatch();



  useEffect(() => {
    function handleClick(e) {
      const popupEl = e.target.closest('#cart-popup')
      if (popupEl) return

      const showPopupBtn = e.target.closest('#show-popup-btn')
      if (showPopupBtn) return

      if (showPopup) dispatch(toggleShowPopup());
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [showPopup, dispatch])

  return (
    <div
      id='cart-popup'
      className={`${className} absolute bg-gray-400 border-4 border-gray-300 rounded-2xl overflow-hidden  text-white z-2 -left-40 w-70 grid`}
    >
      {
        cartItems.length === 0 ?
          <h1 className="text-nowrap text-3xl text-center m-0 py-3">cart is empty</h1> :
          <>
            <Link
              to='/shoping-cart'
              className='text-center border-b border-white text-2xl py-5 uppercase'
              onClick={()=> dispatch(toggleShowPopup())}
            >
              get Cart page</Link>
            {cartItems.map((product, index) => (<CartPopupProduct info={product} key={product.id}
              {...index !== cartItems.length - 1 ? { className: 'border-b-2' } : ''}
            />))}
          </>

      }
    </div>
  )
}

export default CartPopup