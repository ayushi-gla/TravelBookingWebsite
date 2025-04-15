import React from 'react'
import Login from "./pages/Login"
import Register from "./pages/Register"
import HotelBooking from './pages/HotelBooking'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import UnprotectedRoutes from './components/UnprotectedRoutes'
import ProtectedRoutes from './components/ProtectedRoutes'

const App = () => {

  return (
    <div >

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route element={<UnprotectedRoutes />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/hotelBooking" element={<HotelBooking />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App