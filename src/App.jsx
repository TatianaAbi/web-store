import { useRoutes } from 'react-router-dom'
import "./App.css"
import React from 'react'
import { Home } from './Pages/home'
import { MyOrder } from './Pages/myOrder'
import { NotFound } from './Pages/notFound'
import { SignIn } from './Pages/SignIn'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/nav'
import { ContextShoppingApp } from './context/context'
import { MyAccount } from './Pages/myAccount'

const AppRouter = ()=>{
  let appRouter = useRoutes([
    { 
      path:'/', 
      element: <Home/>
    },
    { 
      path:'/:category', 
      element: <Home/>
    },
    { 
      path:'/myAccount', 
      element: <MyAccount/>
    },
    { 
      path:'/myOrder', 
      element: <MyOrder/>  
    },
    { 
      path:'/notFound', 
      element: <NotFound/>
    },
    { 
      path:'/SignIn', 
      element: <SignIn/>
    },
    
  ])

  return appRouter
}

function App() {
  return (
    <ContextShoppingApp>
    <BrowserRouter>
    
      <NavBar/>
      <AppRouter/>
    
    </BrowserRouter>
    </ContextShoppingApp>

  )
}

export default App
