import React from 'react'
import "../assets/styles/dashboard.css"
import Header from "../components/Header"

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard-wrapper">
        <div className="section">
          <div className="search-wrapper">
            <i className="ri-search-line search-icon"></i>
            <input type="text" placeholder="Search Places" className="search-input" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard