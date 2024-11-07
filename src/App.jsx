import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import { API_URL } from './constant';
import Header from './components/Header/header';
import HomePage from './pages/Homepage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';



function App() {
  


  let element = useRoutes(
    [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path:'/product',
        element: <ProductDetailPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }

    ]
  )

  return element;
}

export default App
