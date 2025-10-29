import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    addProductToCart,
    decreasProductCount,
    increasProductCount,
    removeProduct
} from '../states/shopingCartSlice';
import { TrashIcon } from '../assets/icons';

function Product({ info }) {
    const cartItems = useSelector(s => s.shopingCart);
    // console.log();
    const cartItem = cartItems.find(item => item.id === info.id);
    // const cartHasThisItem = Boolean(cartItems.find(item => item.id === info.id));


    const dispatch = useDispatch();
    // const cartItems = useSelector(s => s.shopingCart);
    // console.log(cartItems);


    function onAddProduct() {
        // console.log(cartHasThisItem);
        dispatch(addProductToCart(info))
    }

    return (
        <div className='bg-gray-400 p-3 rounded-2xl grid gap-4'>
            <div className='rounded-2xl overflow-hidden'>
                <img src={info.image} alt="product image" className='object-cover w-full' />
                {/* <img src='asf' alt="product image" className='object-cover w-full' /> */}
            </div>
            <div className='grid grid-cols-2 justify-items-center items-center'>
                <p className="col-span-2 text-xl">{info.title}</p>
                <p>Price: {info.price}</p>

                <div>
                    {cartItem ? (
                        <div className='flex gap-3'>

                            {
                                cartItem.count === 1 ? (
                                    <button
                                        onClick={() => dispatch(removeProduct(info))}
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
                            <p>{cartItem.count}</p>
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