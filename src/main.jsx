import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Categories from './components/elements/Categories.jsx'

const router = createBrowserRouter([
  {
    path: '/categories',
    element: <Categories/>
  },
  {
    path: '/',
    element: <App/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
