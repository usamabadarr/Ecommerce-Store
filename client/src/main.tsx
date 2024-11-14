import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },{
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/profiles/:profileId',
        element: <Profile />
      }, {
        path: '/me',
        element: <Profile />
      }
    ]
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
