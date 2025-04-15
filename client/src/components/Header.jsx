import "../assets/styles/header.css"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext, useState } from "react"

const Header = () => {
    const [auth, setAuth, logout] = useContext(AuthContext)
    const navigate = useNavigate()
    const [activeMenu, setActiveMenu] = useState("Home") // default selected

    const handleMenuClick = (item) => {
        setActiveMenu(item)
        // navigate(`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`)
    }

    return (
        <div className="header">
            <div className="nav">
                <div className="logo">TRIPVISTA</div>
                <div className="menus">
                    {['Home', 'Trips', 'Destinations', 'Contact', 'About'].map((item, i) => (
                        <span
                            className={`menu-item ${activeMenu === item ? 'active' : ''}`}
                            key={i}
                            onClick={() => handleMenuClick(item)}
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="btns">
                    {auth.token && <span className="username">hi ! <span className="">{auth?.user?.fullname?.firstname}</span></span>}


                    {auth.token ? (
                        <button className="logout-btn" onClick={logout}>Logout</button>
                    ) : (
                        <>
                            <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
                            <button className="signup-btn" onClick={() => navigate('/register')}>Sign Up</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
