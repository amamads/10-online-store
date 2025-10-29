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
import Dashbord from './pages/Dashbord.jsx'
import SingUp from './pages/SingUp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Products />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/sing-up',
        element: <SingUp />
      },
      {
        path: '/dashbord',
        element: <Dashbord />
      },
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
