import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import Home from '../components/Home'
import Register from '../components/connect/Register'
import Tournament from '../components/Tournament';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/inscription',
                element: <Register />,
            },
            {
                path: '/tournament',
                element: <Tournament />,
            }
        ],
    },
]);

export default router;