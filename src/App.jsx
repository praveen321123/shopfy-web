import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Navbar'
import Home from './Components/Home'
import Router from './Router'

function App() {

  return (
    <>
      <Navbar />
      <Router />
    </>
  )
}

export default App
