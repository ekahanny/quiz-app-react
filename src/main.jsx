import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Categories from './components/elements/Categories.jsx';
import bgImage from "./assets/bg.jpg";
import QuizPages from './pages/Quiz';
import App from './App';


const background = () => {
  return {
    backgroundImage: `url(${bgImage})`,
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    top: 0,
    left: 0
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/categories',
    element: <Categories />
  },
  {
    path: '/quiz/:category/:apiCategory',
    element: <QuizPages />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={background()}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
