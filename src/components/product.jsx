import { Link } from 'react-router';
import ProductBtns from './ProductBtns';

function Product({ info }) {
    return (
        <div className='bg-gray-400 p-3 rounded-2xl grid gap-4'>
            <div className='rounded-2xl overflow-hidden'>
                {/* <img src={info.image} alt="product image" className='object-cover w-full' /> */}
                <img src='asf' alt="product image" className='object-cover w-full' />
            </div>
            <div className='grid grid-cols-2 justify-items-center items-center'>
                <p className="col-span-2 text-xl">{info.title}</p>
                <p>Price: ${info.price}</p>

                <ProductBtns info={info} />
            </div>
            <Link to={`/products/${info.id}`}>get Detailes</Link>
        </div>
    )
}

export default Product