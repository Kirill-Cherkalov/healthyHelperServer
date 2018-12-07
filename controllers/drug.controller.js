const mongoose = require('mongoose');
const Drug = require('../models/drug.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.drug_create = function (req, res) {
    console.log(req.body)
    let drug = new Drug(
        {
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            web: req.body.web,
            PH: req.body.PH,
            instruction: {
              composition: req.body.composition,
              pharmacologicalProperties: req.body.pharmacologicalProperties,
              indicationsForUse: req.body.indicationsForUse,
              methodOfApplication: req.body.methodOfApplication,
              sideEffect: req.body.sideEffect,
              dosageAdministration: req.body.dosageAdministration,
              interactions: req.body.interactions,
            }
        }
    );

    drug.save(function (err, next) {
        if (err) {
            return console.log(err)
        }
        res.send('Drug Created successfully')
    })
};