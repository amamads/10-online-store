import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    addProductToCart,
    decreasProductCount,
    increasProductCount,
    removeProduct
} from '../states/shopingCartSlice';
import { TrashIcon } from '../assets/icons';

function CartPopupProduct({ info,className }) {
    const cartItems = useSelector(s => s.shopingCart.cartItems);
    const cartItem = cartItems.find(item => item.id === info.id);

    const dispatch = useDispatch();

    return (
        <div className={`bg-gray-400 p-3 grid gap-4 ${className}`}>
            <div className='grid justify-items-center items-center'>
                <p className="text-xl">{info.title}</p>
                <p>Price: ${info.price}</p>

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
                            onClick={() => dispatch(addProductToCart(info))}
                        >Add</button>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default CartPopupProduct