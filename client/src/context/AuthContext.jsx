import { createContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState({
      token: localStorage.getItem('token') || null,
      user: JSON.parse(localStorage.getItem('user')) || null
   })

   const navigate = useNavigate()
   const logout = async () => {
      console.log(auth.token)
      try {
         const response = await axios.get('https://auth-backend-08hn.onrender.com/logout', {
            headers: {
               authorization: `Bearer ${auth.token}`,
            },
         })
         if (response.status === 200) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setAuth({
               token: null,
               user: null
            })
            navigate('/')
         }
      } catch (error) {
         alert(error.response.data.message)
      }
   }


   return (
      <AuthContext.Provider value={[auth, setAuth, logout]}>
         {children}
      </AuthContext.Provider>
   )
}