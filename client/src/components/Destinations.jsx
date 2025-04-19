import React from 'react'
import '../assets/styles/components/destination.css'
import Header from '../components/Header'
import Footer from '../components/common/Footer'

const Destinations = () => {
  return (
    <>
    <Header/>
    <div className='destination_wrapper'>
      <div className='abt'>
        <h2> What's so Special <br /> about this ?</h2>
        <p>Save more on your trips with exclusive discounts , seasonal promotions , and unbeatable deals for unforgettable adventures.</p>
        <button className='btn'>Learn More</button>
      </div>
      <div className='abt-cards'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDa4g0A6jitk4AIb9olUlUP_ERrZMG7GP8g&s" alt="" />
        <p>We don't just plan vacations; we create journeys tailored to your dreams, ensuring every moment is unforgettable.</p>
      </div>

      <div className='abt-cards'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUIWKrXEuWwnVJkKKG2hQyu7Aja-vBqq__g&s" alt="" />
        <p>With our trusted local partners, you'll discover hidden spots and cultural experiences that most travelers never get to see.</p>
      </div>

      <div className='content'>
        <h2>Your next favorite <br />place awaits</h2>
        <div className='Destination-content'>
          <p>Get the best value for your trips with exclusive discounts , seasonal promotions ,and deals to save while exploring the world !</p>
          <button className='btn'>See All </button>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src="https://entiretravel.imgix.net/getmedia/445868c2-c9d7-4b05-8fa1-f85760f35c1a/ETG-Destination-Venice-842x469.jpg?auto=format" alt="" />
          <div className='destinations'>
            <button className='button'>12 Destination</button>
            <h3>Italy</h3>
          </div>
        </div>


        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumCVOwdlbbGpAFxqTNtFSWcpAytWNyTmIEQ&s" alt="" />
          <div className='destinations'>
            <button className='button'>15 Destination</button>
            <h3>Japan</h3>
          </div>
        </div>


        <div className="card">
          <img src="https://static.toiimg.com/photo/106373818.cms" alt="" />
          <div className='destinations'>
            <button className='button'>14 Destination</button>
            <h3>Indonesia</h3>
          </div>
        </div>


        <div className="card">
          <img src="https://www.visitlondon.com/-/media/images/london/visit/general-london/london-panoramic-1280x720.jpg?rev=7c120e60feb14b52be2d1cfb71f54d25&mw=800&hash=E5BAE754E72DDA45F26625BAA7BE6678" alt="" />
          <div className='destinations'>
            <button className='button'>15 Destination</button>
            <h3>London</h3>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />

      <div className='reviews'>
        <h1> I have been on countless trips , but this one was different . Everything was perfectly organized , and the local insights made it truly unique . <span className='text-adventure'>Can't wait for my next adventure!</span></h1>
        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740" alt="" />
        <img src="https://www.shutterstock.com/image-photo/close-face-young-woman-beautiful-600nw-2121831296.jpg" alt="" />
        <img src="https://static.toiimg.com/photo/83890830/83890830.jpg" alt="" />
        <h4 className='name'>Luciana Carter</h4>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Destinations