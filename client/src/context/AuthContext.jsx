import { createContext, useState } from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState({
      token: localStorage.getItem('token') || null,
      user: JSON.parse(localStorage.getItem('user')) || null
   })
   const logout = async () => {
      console.log(auth.token)
      try {
         const response = await axios.get('https://auth-backend-08hn.onrender.com/logout', {
            headers: {
               authorization: `Bearer ${auth.token}`,
            },
         })
         console.log(response)
      } catch (error) {
         console.log('error message:', error.response?.data?.message || error.message);
      }
   }


   return (
      <AuthContext.Provider value={[auth, setAuth, logout]}>
         {children}
      </AuthContext.Provider>
   )
}