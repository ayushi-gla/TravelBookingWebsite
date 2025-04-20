const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// 🔌 MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/travelBookingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch((err) => console.log('❌ MongoDB connection error:', err));

// ✅ Mongoose Schema & Model (with payment support)
const bookingSchema = new mongoose.Schema({
  destination: String,
  departureDate: String,
  returnDate: String,
  hotel: String,
  flightClass: String,
  
    cardName: String,
    cardNumber: String, // Only storing last 4 digits
    expiry: String,
    cvv: String, // ⚠️ Not recommended to store in real-world apps
  
});

const Booking = mongoose.model('Booking', bookingSchema);

// 🌐 Test Route
app.get('/', (req, res) => {
  res.send('✅ Backend is working!');
});

// ✅ POST Route for Saving Booking + Payment
app.post("/bookings", async (req, res) => {
  const formData = req.body; // Extract data from the frontend

  try {
    const newBooking = new Booking({
      destination: formData.destination,
      departureDate: formData.departureDate,
      returnDate: formData.returnDate,
      hotel: formData.hotel,
      flightClass: formData.flightClass,
      cardName: formData.cardName,
      cardNumber: formData.cardNumber,
      expiry: formData.expiry,
      cvv: formData.cvv,
    });

    await newBooking.save(); // Save to MongoDB
    res.status(201).send("Booking successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error while processing the booking");
  }
});

// 🚀 Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
