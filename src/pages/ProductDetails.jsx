import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { selectProductById } from '../states/productsSlice';
import { Link } from 'react-router';
import ProductBtns from '../components/ProductBtns';
function ProductDetails() {
    const productId = useParams().productId
    const info = useSelector(state => selectProductById(state, productId));
    // console.log(info);

    return (
        <div>
            <div className='bg-gray-400 rounded-2xl flex flex-col items-center h-200 justify-evenly'>
                <h1 className="uppercase text-6xl">{info.title}</h1>
                <div className='w-1/2 rounded-2xl overflow-hidden'>
                    <img src={info.image} alt={info.title} className='w-full' />
                </div>

                <div className='flex gap-8'>
                    <p className='text-3xl'>Price : ${info.price}</p>
                    <ProductBtns info={info} />
                </div>
                <p className='w-1/2 text-xl text-center'>{info.details}</p>

                <Link to='/products' className='text-3xl border rounded-2xl px-5 py-2 hover:text-white hover:bg-blue-700 duration-300'>Bask</Link>
            </div>
        </div>

    )
}

export default ProductDetails