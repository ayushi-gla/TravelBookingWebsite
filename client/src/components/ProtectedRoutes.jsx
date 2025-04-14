import React from 'react'
import { useContext } from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoutes = () => {
  const [auth]=useContext(AuthContext)

  if(!auth.token){
    return <Navigate to='/login'/>
  }
  return <Outlet/>
}

export default ProtectedRoutes