import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Products from './pages/Products.jsx'
import Login from './pages/SingIn.jsx'
import Dashbord from './pages/Dashbord.jsx'
import SingUp from './pages/SingUp.jsx'
import { Provider } from 'react-redux'
import { store } from './states/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
