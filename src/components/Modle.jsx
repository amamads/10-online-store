import { useDispatch } from 'react-redux';
import useCloseModule from '../hooks/useCloseModule';

function Module({
    children,
    isShow,
    toggleShowFn,
    elementSelectors = []
}) {
    const dispatch = useDispatch()

    useCloseModule(
        isShow,
        toggleShowFn,
        elementSelectors
    )

    return (
        <div className={`${isShow ? 'fixed' : 'hidden'} inset-0 flex justify-center items-center bg-black/40 z-50`}>
            <div
                id='dashboard-module'
                className="bg-white relative aspect-video max-sm:aspect-3/4 w-3/5 rounded-lg shadow-lg h-100 px-10"
            >
                <button
                    id='close-dashboard-module-btn'
                    className='bg-transparent p-0 absolute right-1/50 top-1/50 text-xl'
                    onClick={e => dispatch(toggleShowFn())}
                >❌</button>

                {children}
            </div>
        </div>
    )
}

export default Module
