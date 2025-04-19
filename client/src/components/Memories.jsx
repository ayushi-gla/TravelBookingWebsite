import React, { useState, useEffect } from "react";
import "../assets/styles/memories.css";

const Memories = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      image: "https://i.ibb.co/qCkd9jS/img1.jpg",
      name: "Switzerland",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
    {
      id: 2,
      image: "https://i.ibb.co/jrRb11q/img2.jpg",
      name: "Finland",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
    {
      id: 3,
      image: "https://i.ibb.co/NSwVv8D/img3.jpg",
      name: "Iceland",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
    {
      id: 4,
      image: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
      name: "Australia",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
    {
      id: 5,
      image: "https://i.ibb.co/jTQfmTq/img5.jpg",
      name: "Netherland",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
    {
      id: 6,
      image: "https://i.ibb.co/RNkk6L0/img6.jpg",
      name: "Ireland",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
  ]);

  // Handle next slide function
  const handleNext = () => {
    setSlides((prevSlides) => {
      const updatedSlides = [...prevSlides];
      const firstSlide = updatedSlides.shift();
      updatedSlides.push(firstSlide);
      return updatedSlides;
    });
  };

  // Handle previous slide function
  const handlePrev = () => {
    setSlides((prevSlides) => {
      const updatedSlides = [...prevSlides];
      const lastSlide = updatedSlides.pop();
      updatedSlides.unshift(lastSlide);
      return updatedSlides;
    });
  };

  return (
    <div className="memories-container">
      <div className="image-container">
        <div className="slide">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="item"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="content">
                <div className="name">{slide.name}</div>
                <div className="des">{slide.description}</div>
                <button className="see-more">See More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="memories-button">
          <button className="prev" onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" onClick={handleNext}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Memories;
