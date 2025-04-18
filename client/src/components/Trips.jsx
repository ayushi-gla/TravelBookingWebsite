import React from 'react'
import "../assets/styles/trips.css"

const Trips = () => {
    return (
        <div className='trips_wrapper'>
            <h2>Popular Trips</h2>

            <div className="cards">
                <div className="card">
                    <img src="https://d1bv4heaa2n05k.cloudfront.net/user-images/1544012661235/shutterstock-322126529_main_1544012673200.jpeg" alt="" />
                    <div className="TripsContent">
                        <div className="rating">
                            <i className="ri-star-fill star-icon" ></i>
                            <i className="ri-star-fill star-icon" ></i>
                            <i className="ri-star-fill star-icon" ></i>
                            <i className="ri-star-fill star-icon" ></i>
                            <i className="ri-star-half-fill star-icon" ></i>
                        </div>
                        <h3 className='Place'>Australia Panorma</h3>
                        <div className="TripsDetail">
                            <span className='text'><i className='ri-calendar-line star-icon'></i> 7 Days</span>
                            <span className='text'><i className='ri-map-pin-line star-icon'></i>5 Places</span>
                            <span className='text'><i className='ri-flag-line star-icon'></i>Australia</span>
                        </div>
                        <div className="Pricing">
                            <span className='price'>Rs.1,25,000   </span>
                            <button className='book'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trips