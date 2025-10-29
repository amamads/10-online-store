import { useSelector } from "react-redux"
import Product from "../components/product"

function Products() {
  const productsInfo = useSelector(s => s.products)

  return (
    <div>
      <div className='grid grid-cols-3 gap-5'>
        {
          productsInfo.length === 0 ?
            <h1 className="big-title">No product available</h1> :
            productsInfo.map(product => (<Product info={product} key={product.id} />))
        }
      </div>
    </div>
  )
}

export default Products