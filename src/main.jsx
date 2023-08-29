import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import {createHashRouter, RouterProvider } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Error from './pages/Error';
import Contact from './pages/Contact';


const router = createHashRouter([
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
      {
        path: '/Contact',
        element: <Contact />,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
