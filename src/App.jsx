import React from 'react'
import Login from './components/log/Login'
import { Home } from './components/Home/Home'

import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const App = () => {

const router =createBrowserRouter([
  {path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])

  return (


    <>
    
    <RouterProvider router={router}/>
  
    </>
  )
}

export default App