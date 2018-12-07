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

module.exports = mongoose.model('Drug', DrugSchema);