import React from 'react'
import "./App.css"
import Nav from './Component/Nav/Nav'
import Home from './Component/Home/Home'
import Signup from './Component/Signup/Signup'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
// import Login from './Component/Login/Login'

function App() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
      
    
  )
}

export default App
