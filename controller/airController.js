const Airport = require('../models/airport');
const Flight = require('../models/flight');
const Passenger = require('../models/passenger');
const Terminal = require('../models/terminal');

console.log('Initializing...');

var flight1 = Flight({
  from: 'CDG, France',
  to: 'JFK New York, USA',
  airline: 'American Airlines',
  passengers: []
})

flight1.save(function(err){
  if (err) {
    console.log(err);
    return
  };
  console.log('Flight Scheduled');
  console.log(flight1);
});

var flight2 = Flight({
  from: 'Heathrow, UK',
  to: 'JFK New York, USA',
  airline: 'British Airways',
  passengers: []
})

flight2.save(function(err){
  if (err) {
    console.log(err);
    return
  };
  console.log('Flight Scheduled');
  console.log(flight2);
});

var airport1 = Airport({
  name: 'JFK',
  country: 'USA',
  terminal: [],
  opened: '1948-07-01T00:00:00Z'
})

airport1.save(function(err){
  if (err) {
    console.log(err);
    return
  };
  console.log('Airport Entry Created');
  console.log(airport1);
});

var terminal1 = Terminal({
  name: 'Terminal 1',
  flights: [flight1, flight2],
  capacity: 234324
})

terminal1.save(function(err){
  if (err) {
    console.log(err);
    return;
  };

  Airport.find({}, function(err, airports){
    if (err) {
      console.log(err);
      return;
    };
    airports[0].terminal.push(terminal1);

    airports[0].save(function(err){
      if (err) {
        console.log(err);
        return;
      }
      console.log('Airport Entry updated with Terminal info');
      console.log(airports);
    })
  })

  console.log('Terminal Entry Created');
  console.log(terminal1);
});