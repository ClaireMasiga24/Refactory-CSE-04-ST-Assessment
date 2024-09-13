//My router
const express = require('express');
const router = express.Router();
const onlineFlightBooking=require("../Models/onlineFlightBookingModel")


// Route to handle booking form submission
router.post('/', async (req, res) => {
    try {
      const booking = new OnlineFlightBooking(req.body);
      await booking.save();
      res.redirect('/'); // Redirect or respond with a success message
    } catch (error) {
      console.error('Error saving booking:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;
