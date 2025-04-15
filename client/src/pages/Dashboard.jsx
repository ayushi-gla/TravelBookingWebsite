import React from 'react'
import "../assets/styles/dashboard.css"
import Header from "../components/Header"
import Marquee from '../components/Marquee'

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-hero">
          <h2>Explore The <span className='text-world'>World</span>,<br />One Unforgettable Journey.</h2>

          <div className="search-wrapper">
            <i className="ri-search-line search-icon"></i>
            <input
              type="text"
              placeholder="Search Places"
              className="search-input"
            />
          </div>
        </div>
        <div className='section-service'>
          <Marquee />
        </div>
      </div>
    </>
  )
}

export default Dashboard