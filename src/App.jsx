import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import './App.css'

import NavComponent from './components/NavComponent'

function App() {


  return (
    <div className="app">
      <NavComponent />
      <Outlet />
    </div>
  )
}

export default App
