import { createBrowserRouter } from 'react-router-dom'

import App from './app/App.jsx'
import Products from './pages/Products.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SingUp from './pages/SingUp.jsx'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import MainLayout from './layouts/MainLayout.jsx'

const ROUTES = {
    auth: {
        login: '/login',
        singUp: '/singUp'
    },
    main: {
        products: '/products',
        productDetails: '/products/:productId',
        dashboard: '/dashboard',
        cart: '/cart'
    }
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            {
                element: <AuthLayout />,
                children: [
                    { path: ROUTES.auth.login, element: <Login /> },
                    { path: ROUTES.auth.singUp, element: <SingUp /> }
                ]
            },
            {
                element: <MainLayout />,
                children: [
                    { path: ROUTES.main.products, element: <Products /> },
                    { path: ROUTES.main.productDetails, element: <ProductDetails /> },
                    { path: ROUTES.main.cart, element: <Cart /> },
                    { path: ROUTES.main.dashboard, element: <Dashboard /> },
                ]
            }

        ]
    }
])
export default router

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//         children: [
//             { path: '/', element: <Home /> },
//             { path: '/products', element: <Products />, },
//             { path: '/products/:productId', element: <ProductDetails /> },
//             { path: '/login', element: <Login /> },
//             { path: '/singUp', element: <SingUp /> },
//             { path: '/dashboard', element: <Dashboard /> },
//             { path: '/cart', element: <Cart /> }
//         ]
//     }
// ])