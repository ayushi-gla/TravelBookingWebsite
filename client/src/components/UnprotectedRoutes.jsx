import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'

const UnprotectedRoutes = () => {

    const [auth] = useContext(AuthContext)
    

    if (auth.token) {
        return <Navigate to='/' />
    }
    return <Outlet />

}

export default UnprotectedRoutes