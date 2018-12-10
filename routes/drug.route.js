const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const drug_controller = require('../controllers/drug.controller');

router.get('/', drug_controller.overview_page);

router.get('/drugs', drug_controller.drugs_list_page);

router.post('/drugs/search/', drug_controller.search_by_sub_string);

router.get('/drugs/:drugGroup/', drug_controller.drugs_details_page)

router.get('/drugs/current/:drugId', drug_controller.drug_details_page)

module.exports = router;