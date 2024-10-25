import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import app from './app';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import Resume from './pages/Resume';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <app />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'about',
                element: <AboutMePage /> 
            },
            {
                path: 'portfolio',
                element: <PortfolioPage />
            },
            {
                path: 'resume',
                element: <Resume />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
        ],
    },
]);

ReactDom.createRoot(document.getElementById('root')).render(
    <routerProvider router={router} />
);

