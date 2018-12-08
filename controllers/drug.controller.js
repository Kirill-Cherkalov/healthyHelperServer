const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DrugSchema = new Schema({
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
    name: { type: String, default: "" },
    saleNaming: [DrugSchema]
})

const OverviewListShema = new Schema({
    name: { type: String, default: "" },
    iconName: { type: String, default: "" },
    data: [DrugListSchema],
})

const OverviewList = mongoose.model('OverviewList', OverviewListShema);


//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.drug_details = function(req, res) {
        OverviewList.find({}, function (err, product) {
            if (err) return console.log(err);
            res.send(product);
        })
}