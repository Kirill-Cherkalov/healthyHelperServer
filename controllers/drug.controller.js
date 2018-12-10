const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DrugSchema = new Schema({
    _id: Schema.Types.ObjectId,
    parent: { type: Schema.Types.ObjectId, ref: 'DrugList' },
    name: { type: String, default: "" },
    manufacturer: { type: String, default: "" },
    web: { type: String, default: "" },
    PH: { type: String, default: "" },
    instruction: {
      composition: { type: String, default: "" },
      pharmacologicalProperties: { type: String, default: "" },
      indicationsForUse: { type: String, default: "" },
      methodOfApplication: { type: String, default: "" },
      sideEffect: { type: String, default: "" },
      dosageAdministration: { type: String, default: "" },
      interactions: { type: String, default: "" },
    }
  });

  const DrugListSchema = new Schema({
      _id: Schema.Types.ObjectId,
      name: { type: String, default: "" },
      parent: { type: Schema.Types.ObjectId, ref: 'DrugsList' },
      saleNaming: [{ type: Schema.Types.ObjectId, ref: 'Drug' }]
  })

  const DrugsListSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, default: "" },
    iconName: { type: String, default: "" },
    data: [{ type: Schema.Types.ObjectId, ref: 'DrugList' }]
  })

const Drug = mongoose.model('Drug', DrugSchema);
const DrugList = mongoose.model('DrugList', DrugListSchema);
const DrugsList = mongoose.model('DrugsList', DrugsListSchema);

exports.overview_page = function(req, res) {
    DrugsList.find({}, 'name iconName', function (err, product) {
            if (err) return next(err);

            res.send(product);
        })
}

exports.drugs_list_page = function(req, res, next) {
    DrugList.find({}, 'name', function(err, product) {
        if (err) return next(err);

        res.send(product);
    })
}

exports.drugs_details_page = function(req, res, next) {
    Drug
      .find({ parent: req.params.drugGroup }, 'name')
      .exec(function (err, drug) {
        if (err) return console.log(err);
        res.send(drug);
      })
}

exports.drug_details_page = function(req, res, next) {
  Drug
    .findById(req.params.drugId)
    .exec(function (err, drug) {
      if (err) return console.log(err);
      res.send(drug);
    })
}

exports.search_by_sub_string = function(req, res, next) {
  Drug.find({ "name": { "$regex": req.body.queryString, "$options": "gim" } }, 'name instruction.interactions', function(err, response) {
      if (err) return console.log(err);

    res.send(response)
  })
}
