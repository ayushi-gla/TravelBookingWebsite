import React from "react";
import "../assets/styles/trips.css";
import Header from "../components/Header";
import Footer from "../components/common/Footer";

const Trips = () => {
  return (
    <>
      <Header />
      <div className="trips_wrapper">
        <h2>Popular Trips</h2>

        <div className="cards">
          <div className="card">
            <img
              src="https://d1bv4heaa2n05k.cloudfront.net/user-images/1544012661235/shutterstock-322126529_main_1544012673200.jpeg"
              alt=""
            />
            <div className="TripsContent">
              <div className="rating">
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-half-fill star-icon"></i>
              </div>
              <h3 className="Place">Australia Panorma</h3>
              <div className="TripsDetail">
                <span className="text">
                  <i className="ri-calendar-line star-icon"></i> 7 Days
                </span>
                <span className="text">
                  <i className="ri-map-pin-line star-icon"></i>5 Places
                </span>
                <span className="text">
                  <i className="ri-flag-line star-icon"></i>Australia
                </span>
              </div>
              <div className="Pricing">
                <span className="price">Rs.1,25,000 </span>
                <button className="book">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://a.storyblok.com/f/53624/1365x1030/32602d4752/woman-overlooking-barcelona-park-guelle-spain_shutterstock_1365x1030.jpg"
              alt=""
            />
            <div className="TripsContent">
              <div className="rating">
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-half-fill star-icon"></i>
                <i className="ri-star-line star-icon"></i>
              </div>
              <h3 className="Place">Best Of Spain</h3>
              <div className="TripsDetail">
                <span className="text">
                  <i className="ri-calendar-line star-icon"></i> 5 Days
                </span>
                <span className="text">
                  <i className="ri-map-pin-line star-icon"></i>15 Places
                </span>
                <span className="text">
                  <i className="ri-flag-line star-icon"></i>Spain
                </span>
              </div>
              <div className="Pricing">
                <span className="price">Rs.2.00,000 </span>
                <button className="book">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://media.traveldepartment.com/image/upload/g_auto,f_auto,q_auto:best,c_lfill,w_1000/v1723818250/Explore_Cinque_Terre_Top_Places_Italy_0ebdfe7ae3"
              alt=""
            />
            <div className="TripsContent">
              <div className="rating">
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-line star-icon"></i>
              </div>
              <h3 className="Place">Italy</h3>
              <div className="TripsDetail">
                <span className="text">
                  <i className="ri-calendar-line star-icon"></i> 8 Days
                </span>
                <span className="text">
                  <i className="ri-map-pin-line star-icon"></i>5 Places
                </span>
                <span className="text">
                  <i className="ri-flag-line star-icon"></i>Italy
                </span>
              </div>
              <div className="Pricing">
                <span className="price">Rs.85,000 </span>
                <button className="book">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://cdn.aarp.net/content/dam/aarp/travel/national-parks/2023/10/1140-mesa-arch-sunrise-canyonlands-utah.jpg"
              alt=""
            />
            <div className="TripsContent">
              <div className="rating">
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-line star-icon"></i>
                <i className="ri-star-line star-icon"></i>
              </div>
              <h3 className="Place">Canyonlands</h3>
              <div className="TripsDetail">
                <span className="text">
                  <i className="ri-calendar-line star-icon"></i>5 Days
                </span>
                <span className="text">
                  <i className="ri-map-pin-line star-icon"></i>8 Places
                </span>
                <span className="text">
                  <i className="ri-flag-line star-icon"></i>Canyonlands
                </span>
              </div>
              <div className="Pricing">
                <span className="price">Rs.3,00,000 </span>
                <button className="book">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg"
              alt=""
            />
            <div className="TripsContent">
              <div className="rating">
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-line star-icon"></i>
              </div>
              <h3 className="Place">India</h3>
              <div className="TripsDetail">
                <span className="text">
                  <i className="ri-calendar-line star-icon"></i> 10 Days
                </span>
                <span className="text">
                  <i className="ri-map-pin-line star-icon"></i>25 Places
                </span>
                <span className="text">
                  <i className="ri-flag-line star-icon"></i>India
                </span>
              </div>
              <div className="Pricing">
                <span className="price">Rs.2,25,000 </span>
                <button className="book">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://deih43ym53wif.cloudfront.net/medium_shutterstock_2252117189_561ec56fbd.jpg"
              alt=""
            />
            <div className="TripsContent">
              <div className="rating">
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-line star-icon"></i>
              </div>
              <h3 className="Place">France Discovery</h3>
              <div className="TripsDetail">
                <span className="text">
                  <i className="ri-calendar-line star-icon"></i> 7 Days
                </span>
                <span className="text">
                  <i className="ri-map-pin-line star-icon"></i>5 Places
                </span>
                <span className="text">
                  <i className="ri-flag-line star-icon"></i>France
                </span>
              </div>
              <div className="Pricing">
                <span className="price">Rs.90,000 </span>
                <button className="book">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsSL1vqetm-k2-2CHmokEBcI-L0AYshjIkQ&s"
              alt=""
            />
            <div className="TripsContent">
              <div className="rating">
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-half-fill star-icon"></i>
              </div>
              <h3 className="Place">Japan In Work</h3>
              <div className="TripsDetail">
                <span className="text">
                  <i className="ri-calendar-line star-icon"></i> 5 Days
                </span>
                <span className="text">
                  <i className="ri-map-pin-line star-icon"></i>7 Places
                </span>
                <span className="text">
                  <i className="ri-flag-line star-icon"></i>Japan
                </span>
              </div>
              <div className="Pricing">
                <span className="price">Rs.1,70,000 </span>
                <button className="book">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://res.klook.com/image/upload/q_85/c_fill,w_750/v1654586251/blog/wsnqunszlajd5ypjo29l.jpg"
              alt=""
            />
            <div className="TripsContent">
              <div className="rating">
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
                <i className="ri-star-fill star-icon"></i>
              </div>
              <h3 className="Place">Explore Bali</h3>
              <div className="TripsDetail">
                <span className="text">
                  <i className="ri-calendar-line star-icon"></i> 10 Days
                </span>
                <span className="text">
                  <i className="ri-map-pin-line star-icon"></i>25 Places
                </span>
                <span className="text">
                  <i className="ri-flag-line star-icon"></i>Bali
                </span>
              </div>
              <div className="Pricing">
                <span className="price">Rs.2,25,000 </span>
                <button className="book">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default Trips;
