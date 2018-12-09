const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const drug_controller = require('../controllers/drug.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', drug_controller.test);

router.get('/', drug_controller.overview_page);

router.get('/drugs', drug_controller.drugs_list_page);

router.get('/drugs/:drugGroup/', drug_controller.drugs_details_page)

router.get('/drugs/current/:drugId', drug_controller.drug_details_page)

module.exports = router;