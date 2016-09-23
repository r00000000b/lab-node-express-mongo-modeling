const mongoose = require('mongoose'); //include mongoose module

var flightSchema = new mongoose.Schema({
  from: String,
  to: String,
  airline: String,
  passengers: [passengers], //MAKE SURE TO get this array from exported PASSENGER.JS
},{
  timestamps: true
});

//create our model

var Flight = mongoose.model('Flight', flightSchema); //attached database model. creates it in mongo.

module.exports = Flight; //exports the module to be used outside of the file