import "../assets/styles/header.css"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

const Header = () => {
    const [auth,setAuth]=useContext(AuthContext)
    const navigate=useNavigate()
    
    return (
        <div className="header">
            <div className="nav">
                <div className="logo">tripVista</div>
                <div className="menus">

                    {['Home', 'Contact', 'About us', 'FAQs'].map((item, i) => (
                        <span className="menu-item" key={i}> {item}</span>

                    ))}

                    <select name="dropdown" id="dropdown" >
                        <option value="">Dropdown</option>
                        <option value="">Option 2</option>
                    </select>
                </div>
                <div className="btns">
                    <span>Hii {auth.user}</span>
                    <button className="login-btn" onClick={()=>{navigate('/login')}} >Login </button>
                    <button className="signup-btn" onClick={()=>{navigate('/register')}}>Sign Up </button>
                </div>
            </div>
        </div>
    )
}

export default Header