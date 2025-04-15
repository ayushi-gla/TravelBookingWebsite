import { motion } from "framer-motion";
import "../assets/styles/marquee.css";

export const MarqueeItems = [
   "🌍 Explore the World with Us!",
   "✈️ Book Flights at Unbeatable Prices!",
   "🏝️ Discover Hidden Travel Gems!",
   "🧳 Plan Your Perfect Getaway!",
   "🔥 Hot Deals on Hotels & Packages!",
   "📅 Flexible Booking Options Available!",
   "🚗 Rent a Car with Just a Click!",
   "📸 Capture Memories, Not Worries!",
   "🌟 Top-Rated Destinations Await!",
   "💬 24/7 Travel Support for You!",
];


const Marquee = () => {
   return (
      <motion.div className="marquee-container">
         {[...Array(2)].map((_, i) => (
            <motion.div
               key={i}
               className="marquee-content"
               animate={{ x: ["0%", "-100%"] }}
               transition={{
                  repeat: Infinity,
                  duration: 120,
                  ease: "linear",
               }}
            >
               {MarqueeItems.map((text, index) => (
                  <span key={index} className="marquee-item">
                     {text} •
                  </span>
               ))}
            </motion.div>
         ))}
      </motion.div>
   );
};

export default Marquee;
