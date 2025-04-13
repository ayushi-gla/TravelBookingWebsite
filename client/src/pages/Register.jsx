import React, { useState } from 'react'
import "../assets/styles/Register.css"
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setAuth]=useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = async (event) => {

    event.preventDefault();

    const formData = {
      fullname: {
        firstname: name,
        lastname: ""
      },
      email,
      password
    }

    try {
      const response = await axios.post("https://auth-backend-08hn.onrender.com/register", formData)
      console.log(response)
      if(response.status===201){
        setAuth({
          token:response.data.token,
          user:response.data.user
        })
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('user',response.data.user)
       navigate('/')
      }
    } catch (error) {
      console.log(error?.response)
      alert(error.response.data?.messasge || error.response.data?.error || "Something went wrong")
    }finally{
      setName('');
      setEmail('');
      setPassword('');
    } 
  }

  return (

    <>
      <Header />
      <div className='container'>
        <div className="wrapper">

          <form action=""
            onSubmit={(event) => handleSubmit(event)}
          >

            <h1 className='text-SignUp'>New here ? <span className='sign-up' >Sign Up.</span></h1>

            <div className="input-wrapper">
              <CiUser className='icon' />
              <input
                type="text"
                placeholder='Name'
                value={name}
                className='input-field'
                onChange={(event) => { setName(event.target.value) }
                }

              />
            </div>

            <div className="input-wrapper">
              <MdOutlineEmail className='icon' />
              <input type="email" placeholder='Email' value={email} className='input-field'
                onChange={(event) => { setEmail(event.target.value) }
                }

              />
            </div>

            <div className="input-wrapper">
              <RiLockPasswordLine className='icon' />
              <input type="password" placeholder='Password' value={password} className='input-field'
                onChange={(event) => { setPassword(event.target.value) }}
              />
            </div>

            <button className='btn-signup'>Sign up</button>

          </form>

          <span className='text-footer'>Already have a account?
            <span className='text-login'  onClick={() => navigate('/login')}> Login</span>
          </span>

        </div>
      </div>
    </>
  )
}

export default Register


