import React from 'react'
import '../assets/styles/utils/about.css'

const About = () => {
    return (
        <div className='about_wrapper'>
            <div className="about_image">
                <img src="https://marketplace.canva.com/EAF_iZkg_3k/1/0/1067w/canva-blue-elegant-holiday-beach-photo-collage-Nq9azu2p8Hw.jpg" alt="" />
            </div>
            <div className="about_content">
                <h2>Explore Organized Adventures – <br /> Your Ultimate Travel Hack</h2>
                <p>Experience the freedom of seamless travel without the stress.w
                    Our expertly curated trips blend comfort, culture, and adventure.
                    From hidden gems to must-see landmarks, every moment is planned for you.
                    Enjoy exclusive perks, personalized itineraries, and local insights.
                    Say goodbye to hassle – and hello to unforgettable journeys.</p>
                <div className="about">
                    <p><i className='ri-building-4-line about-icon'></i>Accomodation</p>
                    <p><i className='ri-car-line about-icon'></i>Transportation Allowance</p>
                    <p><i className='ri-magic-line about-icon'></i>Exclusive Experiences</p>
                    <p><i className='ri-instance-line about-icon'></i>Local Reccomendations</p>
                    <p><i className='ri-pin-distance-line about-icon'></i>Personalized Trip Crafting</p>
                    <p><i className='ri-phone-line about-icon'></i>24/7 Support</p>
                </div>
            </div>
        </div>
    )
}

export default About