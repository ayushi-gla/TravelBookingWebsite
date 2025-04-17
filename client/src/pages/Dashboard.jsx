import React from 'react'
import "../assets/styles/dashboard.css"
import Header from "../components/Header"
import Marquee from '../components/Marquee'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

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
        <div className='destination-places'>

          <Swiper className="swiper">
            <SwiperSlide>
              <div className="Destinations-card">
                <img
                  src="https://i0.wp.com/theboutiqueadventurer.com/wp-content/uploads/2021/04/temple-of-heaven-china.jpg?resize=1200%2C800&ssl=1"
                  alt="China"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }}
                />
                <h3>China</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="Destinations-card">
                <img
                  src="https://worldoflina.com/wp-content/uploads/2021/12/Eiffel-Tower-800x640.jpg"
                  alt="France"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }}
                />
                <h3>France</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="Destinations-card">
                <img
                  src="https://media.istockphoto.com/id/461828751/photo/toronto-skyline.jpg?s=612x612&w=0&k=20&c=E8rKFQbCvmwVZV3ojAe1oRWWcq0Z8VfWtjgwgVrnIs8="
                  alt="Canada"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }}
                />
                <h3>Canada</h3>
              </div>
            </SwiperSlide>

            
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Dashboard