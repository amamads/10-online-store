import React from 'react'
import { useGetProductsQuery } from '../states/apiSlice';
import Product from '../components/Product';
function Products() {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProductsQuery();

  function getProductsEl() {
    if (isLoading) {
      return <h1>Loading...</h1>

    } else if (isSuccess) {
      return products.map(product => (<Product info={product} key={product.id} />))

    } else if (isError) {
      return <h1>{error}</h1>
    }

  }

  return (
    <div>
      <h1 className='text-center text-6xl mb-10'>Products</h1>
      <div className='grid grid-cols-3 gap-5'>
        {getProductsEl()}
      </div>
    </div>
  )
}

export default Products