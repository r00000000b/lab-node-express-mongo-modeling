const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// init express
const app = express();

// init middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// connect mongoDB
const db = 'mongodb://localhost/airport'; // create / use airport db
mongoose.connect(db);

require('./controller/airController');