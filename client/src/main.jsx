import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Donations from './Pages/Donations/Donations';
import Blog from './Pages/Blog/Blog';
import MainLayout from './MainLayout/MainLayout';
import AllFundraisers from './Pages/AllFundraisers/AllFundraisers';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import ApplyNow from './Pages/ApplyNow/ApplyNow';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ViewDetails from './Pages/Home/Fundraisers/FundraisersCard/ViewDetails/ViewDetails';
import ConfirmForm from './Pages/Home/Fundraisers/FundraisersCard/ViewDetails/ConfirmForm/ConfirmForm';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/fundraisers',
        loader: ()=> fetch('http://localhost:5500/fundraisers'),
        element: <AllFundraisers></AllFundraisers>
      },
      {
        path: '/donations',
        element: <PrivateRoute><Donations></Donations></PrivateRoute>,
        
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
        loader: ()=> fetch('http://localhost:5500/blogs')
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/applyNow',
        element: <PrivateRoute><ApplyNow></ApplyNow></PrivateRoute>
      },
      {
        path: '/viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({params})=> fetch(`http://localhost:5500/fundraiser/${params.id}`)
      },
      {
        path: '/confirmForm/:id',
        element: <PrivateRoute><ConfirmForm></ConfirmForm></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5500/fundraiser/${params.id}`)
      }

    ]
    
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
