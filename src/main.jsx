import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './states/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App.jsx'
import Products from './pages/Products.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SingUp from './pages/SingUp.jsx'
import ShopingCart from './pages/ShopingCart.jsx'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products />, },
      { path: '/products/:productId', element: <ProductDetails /> },
      { path: '/login', element: <Login /> },
      { path: '/singUp', element: <SingUp /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/shoping-cart', element: <ShopingCart /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
