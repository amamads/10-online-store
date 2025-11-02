import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router';
import { selectIsAdmin } from '../states/userSlice';
import AddProductModule from '../components/AddProductModule';
import { selectShowAddProductModule, toggleAddProductModule } from '../states/dashboardSlice';

function Dashboard() {
  const isAdmin = useSelector(selectIsAdmin)
  const showModule = useSelector(selectShowAddProductModule)
  const dispatch = useDispatch();

  if (!isAdmin) return <Navigate to='/' replace />

  return (
    <div>
      <h1 className='text-4xl uppercase'>dashboard</h1>
      <div>
        <h2>Options</h2>

        <div className='flex flex-wrap gap-4'>
          {/* <button className='text-xl'
            id='show-dashboard-module-btn'
            onClick={() => dispatch(toggleShowDashboardModule())}
          >add new product</button>
          <AddProductModule isShow={showModule} /> */}

          <button className='text-xl'
            id='show-dashboard-module-btn'
            onClick={() => dispatch()}
          >users List</button>

          <button className='text-xl'
            id='show-dashboard-module-btn'
            onClick={() => dispatch()}
          >Product List</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard