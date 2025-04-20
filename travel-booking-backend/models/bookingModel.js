const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  hotel: { type: String, required: true },
  flightClass: { type: String, enum: ['Economy', 'Business', 'First'], required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
