import React, { useState } from 'react'
import "../assets/styles/Login.css"
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const initialFormData = {
  email: '',
  password: ''
}
const Login = () => {
  const [formData, setFormData] = useState(initialFormData);

  const navigate = useNavigate()
  const [auth, setAuth] = useContext(AuthContext)


  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://auth-backend-08hn.onrender.com/login", formData)
      console.log(response)
      if (response.status === 200) {
        setAuth({
          token: response.data.token,
          user: response.data.user
        })
        navigate('/')
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', response.data.token)
      }
    } catch (error) {
      console.log(error)
      alert(error.response.data?.message || error.reponse.data?.error || "Something went wrong")
    } finally {
      setFormData(initialFormData)
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className="wrapper">
          <form action=""
            onSubmit={(event) => { handleSubmit(event) }}
          >

            <h1 className='login'>Login</h1>
            <div className='input-wrapper'>
              <MdOutlineEmail className='icon' />
              <input
                type="email"
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={(event) => { handleChange(event) }}
                className='input-field' />
            </div>

            <div className='input-wrapper'>
              <RiLockPasswordLine className='icon' />
              <input
                type="password"
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={(event) => { handleChange(event) }}
                className='input-field' />
            </div>
            <button className='btn-login'>Login</button>
          </form>

          <span className='text-footer'>New Here ?
            <span className='text-signUp ' onClick={() => { navigate('/register') }}> Sign Up</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Login