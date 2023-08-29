import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createHashBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Blog';
import Error from './pages/Error';



const router = createHashBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
