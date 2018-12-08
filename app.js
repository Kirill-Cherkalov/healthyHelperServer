const express = require('express');
const bodyParser = require('body-parser');

const cool = require('cool-ascii-faces')
const path = require('path')
const PORT = process.env.PORT || 5000

const drug = require('./routes/drug.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://user:a!11111111@ds235833.mlab.com:35833/my_fitst_database';
const mongoDB = process.env.MONGODB_URI || dev_db_url;


mongoose.connect(mongoDB,  { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use('/drug', drug)

  .use(express.static(path.join(__dirname, 'public')))
  // .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))