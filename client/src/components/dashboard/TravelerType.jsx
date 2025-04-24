import React from "react";
import '../../assets/styles/components/TravelerType.css'; 

const travelerTypes = [
  { emoji: "🌍", label: "The Explorer", description: "Offbeat paths & hidden gems" },
  { emoji: "🧘", label: "The Relaxer", description: "Beach, book & no plans" },
  { emoji: "🏙️", label: "The City Hopper", description: "Skyscrapers, cafes & nightlife" },
  { emoji: "🎒", label: "The Backpacker", description: "Budget-friendly & on the move" },
  { emoji: "👨‍👩‍👧‍👦", label: "The Family Planner", description: "Getaways with loved ones" },
];

export default function TravelerTypeSelector() {
  return (
    <section className="traveler-section">
      <div className="traveler-card">
        <h2 className="traveler-title">🧭 What Type of Traveler Are You?</h2>
        <p className="traveler-subtitle">Find the perfect trip that matches your vibe!</p>

        <div className="traveler-grid">
          {travelerTypes.map((type, index) => (
            <button key={index} className="traveler-option">
              <span className="traveler-emoji">{type.emoji}</span>
              <div className="traveler-text">
                <div className="traveler-label">{type.label}</div>
                <div className="traveler-description">{type.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
