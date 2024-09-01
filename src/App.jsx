import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import PricingPage from "./pages/PricingPage"
import HeroSection from "./components/HeroSection"

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Navbar />
      <HeroSection/>
      </>
    )
  },
  {
    path: '/login',
    element: (
      <>
      <Navbar />
      <LoginPage/>
      </>
    )
  },
  {
    path: '/pricing',
    element: (
      <>
      <Navbar />
      <PricingPage/>
      </>
    )
  }
])

function App() {

  return (
    <>
    
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
