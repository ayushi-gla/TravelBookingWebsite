import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import { FiMousePointer } from "react-icons/fi";
import '../../assets/styles/components/trail.css'

export const ImageTrail = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
         "https://thumbs.dreamstime.com/b/istanbul-turkey-october-view-galata-bridge-eminonu-square-random-people-urban-landscape-345849476.jpg",
         "https://media.istockphoto.com/id/1473868732/photo/girl-friends-sitting-on-a-clifftop-viewpoint-and-admiring-view-of-majestic-flying-hot-air.jpg?s=612x612&w=0&k=20&c=2lPLwKH8se_8CEICqUHzwAm_LhXc7ypj7qfEGUyGlZc=",
         "https://landlopers.com/wp-content/uploads/2016/02/Penguins-Antarctica.jpg",
         "https://media.istockphoto.com/id/1166378619/photo/large-group-of-happy-friends-in-mountains-area.jpg?s=612x612&w=0&k=20&c=PRlOrqCmlc7QEpTtQw5Blk5NlTtQzT8osgFDK8059p0=",
         "https://thumbs.dreamstime.com/b/happy-travel-woman-vacation-concept-funny-traveler-enjoy-her-trip-ready-to-adventure-happy-travel-woman-vacation-concept-118679424.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7ryXIx2RxgjtEgVEL0dNioXSsFPuDM6LuA&s",
         "https://www.shutterstock.com/image-photo/tourists-riding-camels-smiling-sahara-260nw-2489432271.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvQXMV6FN8DUoxgS59hsnEjI5L6vW0817Jw&s",
         "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/d4/fa/fa.jpg",
         "https://www.fabhotels.com/blog/wp-content/uploads/2020/05/road-trip-hacks-tips-600.jpg",
         "https://greenwoodhigh.edu.in/wp-content/uploads/2024/01/image-88.png",
         "https://t4.ftcdn.net/jpg/04/08/81/09/360_F_408810925_IG49PMSfC7ZolH4ZLYNZTVuy8YN0BhGK.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3W2x9NQjVNi05wrnJU595xflt5phYRBWQtQ&s",
         "https://images.wanderon.in/blogs/new/2023/08/top-min-28.jpg",
         "https://www.mistay.in/travel-blog/content/images/2020/05/cover-9.jpg",
         "https://www.hostelworld.com/blog/wp-content/uploads/2020/03/travelling-with-strangers-@thelosthostels.jpg",
      ]}
    >
      <section className="trail-section">
        <p className="trail-text">
          <FiMousePointer />
          <span>Hover me</span>
        </p>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;
      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;
    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2 === 0 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2 === 0 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current++;
  };

  return (
    <div ref={scope} className="trail-wrapper" onMouseMove={handleMouseMove}>
      {children}
      {images.map((img, index) => (
        <img
          className="trail-image"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
