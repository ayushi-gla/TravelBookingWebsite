import { createContext, useState } from "react"

export const AuthContext = createContext()

 export const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState({
      token: localStorage.getItem('token'),
      user: localStorage.getItem('user')
   })


   return (
      <AuthContext.Provider value={[auth,setAuth]}>
         {children}
      </AuthContext.Provider>
   )
}