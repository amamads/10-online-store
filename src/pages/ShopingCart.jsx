import { useSelector } from "react-redux"
import Product from "../components/product"
import { selectCartItems, selectSumPrices } from "../states/shopingCartSlice"

function ShopingCart() {
  const cartItems = useSelector(selectCartItems)
  const sumPrices = useSelector(selectSumPrices)

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

      <div className="h-20"> </div>
      <div className="bg-gray-400 h-20 w-screen fixed bottom-0 left-0 text-center">
        <h1>Sum Prices: {sumPrices}</h1>
      </div>
    </div>
  )
}

export default ShopingCart