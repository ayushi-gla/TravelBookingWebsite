import React from "react";
import "../assets/styles/dashboard.css";
import Header from "../components/Header";
import Marquee from "../components/Marquee";
import About from "../components/About";
import TravelerType from "../components/dashboard/TravelerType"
import Memories from "../components/Memories";
import Trips from "../components/Trips";
import Footer from "../components/common/Footer";
import { ImageTrail } from "../components/dashboard/ImageTrail";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-hero">
          <h2>
            Explore The <span className="text-world">World</span>,<br />
            One Unforgettable Journey.
          </h2>

          <div className="search-wrapper">
            <i className="ri-search-line search-icon"></i>
            <input
              type="text"
              placeholder="Search Places"
              className="search-input"
            />
          </div>
        </div>
        <div className="section-service">
          <Marquee />
        </div>
        <div className="trail">
        <ImageTrail/>
        </div>
        <Memories />
        <TravelerType/>
        <About />
      </div>
      
      <Footer />
    </>
  );
};

export default Dashboard;
