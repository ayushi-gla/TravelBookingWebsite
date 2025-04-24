import "../assets/styles/header.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

const Header = () => {
  const [auth, setAuth, logout] = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (item) => {
    setActiveMenu(item);
    navigate(`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`);
  };

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    if (value) {
      // Set the active menu to the selected option
      setActiveMenu(value);
      // Navigate to the corresponding route based on dropdown selection
      navigate(`/${value.toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  return (
    <div className="header">
      <div className="nav">
        <div className="logo">TRIPVISTA</div>
        <div className="menus">
          {["Home", "Trips", "Destinations", "Contact"].map((item, i) => (
            <span
              className={`menu-item ${activeMenu === item ? "active" : ""}`}
              key={i}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </span>
          ))}
          <select
            id="dropdown"
            className="dropdown"
            onChange={handleDropdownChange}
            value=""
          >
            <option value="">Bookings</option>
            <option value="Hotel Booking">Hotel & Flight Booking</option>

          </select>
        </div>

        <div className="btns">
          {auth.token && (
            <span className="username">
              hi ! <span className="">{auth?.user?.fullname?.firstname}</span>
            </span>
          )}

          {auth.token ? (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
              <button
                className="signup-btn"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
