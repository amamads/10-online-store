import ProductBtns from '../../components/ProductBtns';

function CartPopupProduct({ info, className }) {
    return (
        <div className={`bg-gray-400 p-3 grid gap-4 ${className}`}>
            <div className='grid justify-items-center items-center'>
                <p className="text-xl">{info.title}</p>
                <p>Price: ${info.price}</p>

                <ProductBtns info={info} />
            </div>
        </div>
    )
}

export default CartPopupProduct