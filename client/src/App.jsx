import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  HomeLayout,Landing,Register,Login,DashboardLayout,Error,
  AddJob,Stats,AllJobs,Profile,Admin,EditJob
} from './pages'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import {action as registerAction} from "./pages/Register.jsx"
import {action as loginAction} from "./pages/Login.jsx"
import {loader as dashboardLoader} from './pages/DashboardLayout.jsx'
import {action as addJobAction} from "./pages/AddJob.jsx"
import {loader as allJobsLoader} from './pages/AllJobs.jsx'
import {action as editJobAction} from "./pages/EditJob.jsx"
import {loader as editJobLoader} from './pages/EditJob.jsx'
import {action as deleteJobAction} from "./pages/DeleteJob.jsx"
import {loader as adminLoader} from './pages/Admin.jsx'
import {action as profileAction} from "./pages/Profile.jsx"
import {loader as statsLoader} from './pages/Stats.jsx'
import ErrorElement from './components/ErrorElement.jsx';

export const checkDefaultTheme=()=>{
  const isDarkTheme=localStorage.getItem('DarkTheme')==='true'
  document.body.classList.toggle('dark-theme',isDarkTheme)
  return isDarkTheme
}

const isDarkThemeEnabled=checkDefaultTheme()

const queryClient= new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000 *60 *5
    }
  }
})

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:'register',
        element:<Register/>,
        action:registerAction
      },
      {
        path:'login',
        element:<Login/>,
        action:loginAction(queryClient)
      },
      {
        path:'dashboard',
        element:(<DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} queryClient={queryClient}/>),
        loader:dashboardLoader(queryClient),
        children:[
          {
            index:true,
            element:<AddJob/>,
            action:addJobAction(queryClient)
          },
          {
            path:'stats',element:<Stats/>,loader:statsLoader(queryClient),errorElement:<ErrorElement/>
          },
          {
            path:'all-jobs',element:<AllJobs/>,loader:allJobsLoader(queryClient),errorElement:<ErrorElement/>
          },
          {
            path:'profile',element:<Profile/>,action:profileAction(queryClient)
          },
          {
            path:'admin',element:<Admin/>,loader:adminLoader
          },
          {
            path:'edit-job/:id',element:<EditJob />,loader:editJobLoader(queryClient),action:editJobAction(queryClient),
          },
          {
            path:'delete-job/:id',action:deleteJobAction(queryClient)
          }
        ]
      },
    ] /*children path will be relative to parent, so / are all removed */

    
  },
  
]);
const App = () => {
  return(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>;
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>)
  
};

export default App;
