import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './layout/Layout';
import HomePage from './pages/homepage/HomePage';
import TimeLine from './pages/timelinepages/TimeLine';

import FriendDetails from './pages/friendDetailsPage/FriendDetails';
import FriendContextProvider from './context/friendContextProvider';
import Dashboard from './pages/dashboardPage/Dashboard';
import { ToastContainer } from 'react-toastify';





const router = createBrowserRouter([
  {
   
    path: "/",
    Component:Layout,
    children:[
      {
          path:"/homepage",
           Component:HomePage,
      },
      {
          path:"/timelinepage",
          Component:TimeLine,
      },
      
      {
          path:"/friendDetailsPage/:id",
          Component:FriendDetails,
           },
      {
          path:"/Dashboard",
          Component:Dashboard,
           },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
   
  <StrictMode>
    <FriendContextProvider>

         <RouterProvider router={router} />


    </FriendContextProvider>
    <ToastContainer/>
     
  </StrictMode>,
)
