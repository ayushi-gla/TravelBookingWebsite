exports.createBooking = (req, res) => {
    const booking = req.body;
    console.log("Booking received:", booking);
  
    res.status(201).json({
      message: "Booking successfully saved!",
      booking,
    });
  };
  