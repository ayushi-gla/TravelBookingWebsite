import '../../assets/styles/components/faq.css';
// FAQ.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqData = [
    {
      question: "How can I make changes to my existing reservation?",
      answer: "You can easily modify your reservation through our customer portal by logging into your account and selecting 'My Bookings.' For more complex changes, such as multi-destination itinerary adjustments or group booking modifications, please contact our dedicated reservations team directly at reservations@travelbooking.com or call us at +1 (800) 123-4567. Please note that changes may be subject to our flexibility policy and potential fare differences."
    },
    {
      question: "What is your cancellation and refund policy?",
      answer: "Our cancellation policy varies based on the type of booking and fare class selected. Generally, bookings canceled within 24 hours of purchase qualify for a full refund. Economy fares canceled more than 72 hours before departure are eligible for a partial refund or full travel credit. Premium bookings offer more flexibility with refunds available up to 24 hours before departure. For detailed information specific to your booking, please check your travel confirmation email or contact our customer service team."
    },
    {
      question: "Do you offer travel insurance options?",
      answer: "Yes, we provide comprehensive travel protection plans through our trusted partners. Our Premium Travel Protection includes coverage for trip cancellation, medical emergencies, lost luggage, travel delays, and COVID-19 related disruptions. The Essential Travel Protection covers basic trip cancellation and medical emergencies. We recommend reviewing the detailed coverage information during checkout. Insurance must be purchased within 14 days of your initial booking for maximum benefits and pre-existing condition coverage."
    },
    {
      question: "How do I arrange special accommodations or requests?",
      answer: "We're committed to making your travel experience comfortable and accessible. For special dietary requirements, mobility assistance, medical accommodations, or other specific needs, please specify your requirements during the booking process using the 'Special Requests' section. For complex requests, please contact our customer service team at least 72 hours before departure. We recommend contacting us directly for accessibility accommodations to ensure we can properly prepare for your specific needs."
    },
    {
      question: "What documentation do I need for international travel?",
      answer: "Required travel documentation varies by destination. Generally, you'll need a passport valid for at least six months beyond your travel dates. Many countries require visas, travel permits, or proof of onward travel. Some destinations may have specific health requirements such as vaccination certificates or negative COVID-19 tests. We strongly recommend checking the official government websites of your destination country or consulting with their embassy for the most current requirements. Our Travel Documentation Guide in your account portal also provides destination-specific information."
    },
    {
      question: "Do you have a loyalty program or frequent traveler benefits?",
      answer: "Yes, our WorldWanderer Rewards program offers substantial benefits for frequent travelers. Members earn points on all bookings which can be redeemed for discounts, upgrades, and complimentary services. Our tiered membership system (Silver, Gold, Platinum, and Diamond) provides increasing benefits including priority customer service, flexible cancellation policies, complimentary upgrades, and exclusive partner discounts. Registration is free and new members receive 1,000 bonus points on their first booking. Join through your account dashboard or during the checkout process."
    },
    {
      question: "How far in advance should I book to get the best rates?",
      answer: "For optimal pricing and availability, we recommend booking international flights 4-6 months in advance, especially for peak travel seasons. Domestic flights typically offer the best rates when booked 1-3 months before travel. Last-minute deals occasionally become available 2-3 weeks before departure, but selection is limited. For special events, holidays, or popular destinations during high season, booking 6-12 months in advance is advisable. Our Price Prediction Tool can help gauge whether prices are likely to rise or fall for specific routes."
    },
    {
      question: "What happens if my flight is delayed or canceled?",
      answer: "In the event of significant delays or cancellations, our automated system will immediately notify you via email and SMS with rebooking options. Our 24/7 Travel Disruption Team proactively works to resolve issues before they affect your journey. If you purchased our Premium Travel Protection, you may be eligible for compensation for accommodations, meals, and alternative transportation. For carrier-controlled delays, we'll advocate on your behalf with the airline for appropriate compensation according to applicable regulations and airline policies."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find answers to common questions about our services, booking processes, and travel policies.</p>
        
        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question-container"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="faq-question">{item.question}</h3>
                <div className="faq-icon">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              <div className={`faq-answer-container ${openIndex === index ? 'open' : ''}`}>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-contact">
          <h3>Still have questions?</h3>
          <p>Our dedicated travel specialists are here to help with any additional questions or concerns you may have.</p>
          <button className="faq-contact-button">Contact Our Support Team</button>
        </div>
      </div>
    </div>
  );
};