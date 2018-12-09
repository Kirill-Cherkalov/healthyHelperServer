const express = require('express');
const bodyParser = require('body-parser');

const path = require('path')
const PORT = process.env.PORT;

const drug = require('./routes/drug.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI;


mongoose.connect(mongoDB,  { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use('/overview', drug)

  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))