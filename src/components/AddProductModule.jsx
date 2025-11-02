import { useDispatch, useSelector } from 'react-redux';
import { selectShowAddProductModule, toggleAddProductModule } from '../states/dashboardSlice';
import useInput from '../hooks/useInput'
import { addProduct } from '../states/productsSlice';
import Module from './Modle';

function AddProductModule({ }) {
  const showModule = useSelector(selectShowAddProductModule)
  const dispatch = useDispatch();

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

    dispatch(toggleAddProductModule())
  }

  return (
    <Module
      isShow={showModule}
      toggleShowFn={toggleAddProductModule}
      elementSelectors={[
        '#dashboard-module',
        '#show-dashboard-module-btn',
        '#close-dashboard-module-btn'
      ]}
    >
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
    </Module>
  )
}

export default AddProductModule