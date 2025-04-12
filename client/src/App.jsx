import React from 'react'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div >
       

        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App