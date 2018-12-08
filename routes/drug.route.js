const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const drug_controller = require('../controllers/drug.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', drug_controller.test);

router.get('/', drug_controller.drug_details);

module.exports = router;