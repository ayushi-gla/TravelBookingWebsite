import React from "react";
import "../assets/styles/dashboard.css";
import Header from "../components/Header";
import Marquee from "../components/Marquee";
import About from "../components/About";
import ImageSwiper from "../components/Swiper";
import Memories from "../components/Memories";
import Trips from "../components/Trips";
import Footer from "../components/common/Footer";

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
        <Memories />

        <h1 style={{ color: "black" }}>(Yha Kuch likh lena) </h1>
        <About />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
