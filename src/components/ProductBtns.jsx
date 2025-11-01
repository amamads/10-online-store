import { TrashIcon } from '../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
    addProductToCart,
    decreasProductCount,
    increasProductCount,
    removeProduct,
    selectCartItemById
} from '../states/shopingCartSlice';


function ProductBtns({ info }) {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => selectCartItemById(state, info.id))

    return (
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
    )
}

export default ProductBtns