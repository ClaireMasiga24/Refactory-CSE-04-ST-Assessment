//Making A model for the online
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for online flight booking data
const onlineFlightBookingSchema = new Schema({
  fullname: { 
    type: String, 
    required: true // Full name of the passenger
  },
  gender: { 
    type: String, 
    required: true, 
    enum: ['male', 'female'], // Gender options
    message: 'Gender must be either male or female'
  },
  dob: { 
    type: Date, 
    required: true // Date of birth of the passenger
  },
  nationality: { 
    type: String, 
    required: true // Nationality of the passenger
  },
  phone: { 
    type: String, 
    required: true // Phone number of the passenger
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, // Email must be unique
    match: [/.+@.+\..+/, 'Please enter a valid email address'] // Simple email validation
  },
  pobox: { 
    type: String // P.O. BOX number (optional)
  },
  emergency_phone: { 
    type: String, 
    required: true // Emergency contact phone number
  },
  passport: { 
    type: String, 
    required: true // Passport number of the passenger
  },
  visa: { 
    type: String, 
    required: true // Visa document (file path or identifier)
  },
  departure_city: { 
    type: String, 
    required: true // City from where the flight departs
  },
  destination_city: { 
    type: String, 
    required: true // City where the flight is heading
  }
});

// Creating a model from the schema
const OnlineFlightBooking = mongoose.model('OnlineFlightBooking', onlineFlightBookingSchema);

module.exports = OnlineFlightBooking; //  This will help me export the model for use in other files
