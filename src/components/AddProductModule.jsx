import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectIsShowDashboradModule, toggleShowDashboardModule } from '../states/dashboardSlice';
import useCloseModule from '../hooks/useCloseModule';
import useInput from '../hooks/useInput'
import { addProduct } from '../states/productsSlice';
function AddProductModule({ isShow }) {
  const showModule = useSelector(selectIsShowDashboradModule)
  const dispatch = useDispatch();

  useCloseModule(
    showModule,
    toggleShowDashboardModule,
    [
      '#dashboard-module',
      '#show-dashboard-module-btn',
      '#close-dashboard-module-btn'
    ]
  )

  const { value: title, bind: titleBind } = useInput('Title')
  const { value: details, bind: detailsBind } = useInput('Details')
  const { value: price, bind: priceBind } = useInput('Price')
  const { value: image, bind: imageBind } = useInput('Image Url')

  function onSubmitForm(e) {
    e.preventDefault();

    if (
      [title, image, price, details].some(item => item === '')
    ) return alert('Enter all new product values')

    dispatch(addProduct({ title, image, price, details }))

    dispatch(toggleShowDashboardModule())
  }

  return (
    <div className={`${isShow ? 'fixed' : 'hidden'} inset-0 flex justify-center items-center bg-black/40 z-50`}>
      <div
        id='dashboard-module'
        className="bg-white relative aspect-video max-sm:aspect-3/4 w-3/5 rounded-lg shadow-lg h-100 px-10"
      >
        <button
          id='close-dashboard-module-btn'
          className='bg-transparent p-0 absolute right-1/50 top-1/50 text-xl'
          onClick={e => dispatch(toggleShowDashboardModule())}
        >❌</button>

        <form
          onSubmit={onSubmitForm}
          className='grid  justify-items-center content-center gap-5 '
        >
          <h1 className="text-2xl font-semibold">Add Product Module</h1>

          <input type="text" {...titleBind} />
          <input type="text" {...detailsBind} />
          <input type="number" {...priceBind} />
          <input type="text" {...imageBind} />
          <input type="submit" value="Add Product" />
        </form>
        
      </div>
    </div>
  )
}

export default AddProductModule
