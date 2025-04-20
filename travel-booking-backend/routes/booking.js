const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  departureDate: { type: String, required: true },
  returnDate: { type: String, required: true },
  hotel: { type: String, required: true },
  flightClass: { type: String, required: true },
  payment: {
    cardName: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expiry: { type: String, required: true },
    cvv: { type: String, required: true },
  },
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
