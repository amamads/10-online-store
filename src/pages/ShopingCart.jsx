import { useSelector } from "react-redux"
import Product from "../components/product"

function ShopingCart() {
  const cartItems = useSelector(s => s.shopingCart)

  return (
    <div>
      <h1 className="text-center uppercase mb-10 text-4xl">Shoping Cart</h1>
      <div className='grid grid-cols-2 gap-5'>
        {
          cartItems.length === 0 ?
            <h1 className="big-title text-nowrap text-8xl">cart is empty</h1> :
            cartItems.map(product => (<Product info={product} key={product.id} />))
        }
      </div>
    </div>
  )
}

export default ShopingCart