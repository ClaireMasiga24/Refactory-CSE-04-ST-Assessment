// Importing all dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require("body-parser")
const path = require('path');


// Initialize express
const app = express();
const PORT = process.env.PORT || 3000;

// My Configurations

// Set up Pug as the view engine for rendering HTML files
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Set views folder (where Pug templates are stored)

// Middleware to serve all static files like CSS and images
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route to render pug
app.get('/', (req, res) => {
  res.render('onlineFlightBooking', { title: 'Online Flight Booking Form', message: 'Welcome to the Online Flight Booking Form' });
});

// Import and use routes
const onlineFlightBookingRouter = require('./Routers/onlineFlightBookingRouter'); 
app.use('/booking', onlineFlightBookingRouter);

// MongoDB connection
// mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
