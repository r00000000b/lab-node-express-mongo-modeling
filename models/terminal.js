const mongoose = require('mongoose'); //include mongoose module

var terminalSchema = new mongoose.Schema({
  name: String,
  flights: [{ type: mongoose.Schema.ObjectId, ref: 'Flight'}], //MAKE SURE TO get this array from exported FLIGHTS.JS
  capacity: Number
},{
  timestamps: true
});

//create our model

var Terminal = mongoose.model('Terminal', terminalSchema); //attached database model. creates it in mongo.

module.exports = Terminal; //exports the module to be used outside of the file