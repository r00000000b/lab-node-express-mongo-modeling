const mongoose = require('mongoose'); //include mongoose module

var passengerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date
},{
  timestamps: true
});

//create our model

var Passenger = mongoose.model('Passenger', passengerSchema); //attached database model. creates it in mongo.

module.exports = Passenger; //exports the module to be used outside of the file