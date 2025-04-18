import React from 'react';
import '../../assets/styles/components/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">Travel Booking</h3>
            <p className="footer-description">Your trusted partner for unforgettable journeys and seamless travel experiences worldwide.</p>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Destinations</a></li>
              <li><a href="#" className="footer-link">Special Offers</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Policies</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Cancellation Policy</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Payment Methods</h3>
            <div className="payment-methods">
              <div className="payment-card"></div>
              <div className="payment-card"></div>
              <div className="payment-card"></div>
              <div className="payment-card"></div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Travel Booking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};