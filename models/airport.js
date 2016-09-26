const mongoose = require('mongoose'); //include mongoose module

var Terminal = mongoose.model("Terminal");

var airportSchema = new mongoose.Schema({
  name: String,
  country: String,
  terminal: [Terminal.schema], //MAKE SURE TO get this array from exported TERMINAL.JS
  opened: Date
},{
  timestamps: true
});

/*
 * May not be needed

//Virtual method. method is a function. ad in this instance is just a name.
airportSchema.methods.ad = function(){
  console.log(this.name);
};

//Virtual getter & setter. virtual is for simple stuff
airportSchema.virtual('airport.namenameAndColor').get(function(){
  return this.name + ' ' + this.country + ' ' + this.;
})

*/

//create our model

var Airport = mongoose.model('Airport', airportSchema); //attached database model. creates it in mongo.

module.exports = Airport; //exports the module to be used outside of the file