import React from 'react'
import Login from "./pages/Login"
import Register from "./pages/Register"
import HotelBooking from './pages/HotelBooking'
import Header from './components/Header'
import Trips from './components/Trips'
import Memories from './components/Memories'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import UnprotectedRoutes from './components/UnprotectedRoutes'
import ProtectedRoutes from './components/ProtectedRoutes'
import Contact from './pages/Contact'

const App = () => {

  return (
    <div >

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route element={<UnprotectedRoutes />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/trips' element={<Trips/>}/>
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/hotelBooking" element={<HotelBooking />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App