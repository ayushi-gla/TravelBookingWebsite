// ImageSwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../assets/styles/swiper.css';

const destinations = [
   {
      name: 'China',
      image: 'https://i0.wp.com/theboutiqueadventurer.com/wp-content/uploads/2021/04/temple-of-heaven-china.jpg?resize=1200%2C800&ssl=1',
   },
   {
      name: 'France',
      image: 'https://worldoflina.com/wp-content/uploads/2021/12/Eiffel-Tower-800x640.jpg',
   },
   {
      name: 'Canada',
      image: 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80',
   },
   {
      name: 'Italy',
      image: 'https://images.unsplash.com/photo-1529516543652-30e4c2cfd8c7?auto=format&fit=crop&w=800&q=80',
   },
];

const ImageSwiper = () => {
   return (
      <Swiper
         spaceBetween={20}
         slidesPerView={1.2}
         grabCursor={true}
         className="destination-swiper"
      >
         {destinations.map((place, index) => (
            <SwiperSlide key={index}>
               <div className="destination-card">
                  <img
                     src={place.image}
                     alt={`Image of ${place.name}`}
                     className="destination-image"
                  />
                  <h3>{place.name}</h3>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default ImageSwiper;
