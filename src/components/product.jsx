import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addProduct } from '../states/shopingCartSlice';
import { cancelProduct, decreasProductCount, increasProductCount, sellProduct } from '../states/productsSlice';
import { TrashIcon } from '../assets/icons';

function Product({ info }) {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(s => s.shopingCart);


    function onAddProduct() {
        if (!info.isSell) {
            dispatch(sellProduct(info))
            // dispatch(addProduct(info))
        }
    }
    return (
        <div className='bg-gray-400 p-3 rounded-2xl grid gap-4'>
            <div className='rounded-2xl overflow-hidden'>
                {/* <img src={info.image} alt="product image" className='object-cover w-full' /> */}
                <img src='asf' alt="product image" className='object-cover w-full' />
            </div>
            <div className='grid grid-cols-2 justify-items-center items-center'>
                <p className="col-span-2 text-xl">{info.title}</p>
                <p>Price: {info.price}</p>

                <div>
                    {info.isSell ? (
                        <div className='flex gap-3'>

                            {
                                info.count === 1 ? (
                                    <button
                                        onClick={() => dispatch(cancelProduct(info))}
                                    >
                                        <TrashIcon className="w-4" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => dispatch(decreasProductCount(info))}
                                    >
                                        -
                                    </button>
                                )
                            }
                            <p>{info.count}</p>
                            <button
                                onClick={() => dispatch(increasProductCount(info))}
                            >+</button>
                        </div>
                    ) : (
                        <button
                            className='text-base'
                            onClick={onAddProduct}
                        >Add</button>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Product