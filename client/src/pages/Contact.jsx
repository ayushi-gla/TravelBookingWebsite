import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import FAQ from "../components/common/FAQ";
import Footer from "../components/common/Footer";
import Header from "../components/Header";
import "../assets/styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <Header />
      {/* Hero Section */}
      <div class="hero-section">
        <div class="hero-overlay">
          <div class="hero-title-box">
            <h1 class="hero-title">need help?</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-grid">
          {/* Right Column - Contact Info */}
          <div className="contact-info-column">
            {/* Contact Information */}
            <div className="info-card">
              <h2 className="section-title">Contact Information</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div className="contact-text">
                    <h3 className="contact-category">Email</h3>
                    <p>info@travelbooking.com</p>
                    <p>support@travelbooking.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div className="contact-text">
                    <h3 className="contact-category">Phone</h3>
                    <p>+1 (800) 123-4567 (Toll-free)</p>
                    <p>+1 (555) 987-6543 (International)</p>
                  </div>
                </div>

                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div className="contact-text">
                    <h3 className="contact-category">Address</h3>
                    <p>
                      123 Adventure Avenue
                      <br />
                      Suite 500
                      <br />
                      Travelville, TX 98765
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <Clock className="contact-icon" />
                  <div className="contact-text">
                    <h3 className="contact-category">Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="info-card">
              <h2 className="section-title">Follow Us</h2>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <Facebook size={24} />
                </a>
                <a href="#" className="social-icon">
                  <Twitter size={24} />
                </a>
                <a href="#" className="social-icon">
                  <Instagram size={24} />
                </a>
              </div>
              <p className="social-text">
                Stay connected with us on social media for the latest travel
                deals, destination tips, and company updates.
              </p>
            </div>
          </div>
          {/* Left Column - Contact Form */}
          <div className="contact-form-container">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-description">
              Have questions about your booking or need assistance planning your
              next adventure? Fill out the form below and our travel experts
              will get back to you shortly.
            </p>

            {submitted ? (
              <div className="form-success-message">
                <h3 className="success-title">Thank You!</h3>
                <p>
                  Your message has been sent successfully. We'll respond as soon
                  as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Name"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="abc@example.com"
                />

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Booking Inquiry"
                />

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us how we can help you..."
                ></textarea>

                <button type="submit" className="submit-button">
                  <Send size={18} className="button-icon" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Column - Contact Info */}
        </div>
      </div>

      {/* Newsletter */}

      <div className="newsletter-section">
        <div className="newsletter-container">
          <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
          <p className="newsletter-description">
            Stay updated with our latest travel deals, exclusive offers, and
            destination guides delivered straight to your inbox.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
