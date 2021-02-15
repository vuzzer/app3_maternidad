const { mongo } = require("mongoose")

const mongoose = require('mongoose');
const { modulo } = require("ramda");

const ExtraitSchema = mongoose.Schema({
    firstName : {type: String, },
    lastName : {type: String, },
    birthday : {type: String, },
    numberExtrait : {type: String, },
    nationality : {type: String, },
    cityOfbirth : {type: String, },
    signature: {type: String, },
    fatherPublicKey: {type: String, },
    motherPublicKey: {type: String, },
    hash: {type: String},
    hospitalPublicKey : {type: String, }
});

module.exports = mongoose.model('Extrait', ExtraitSchema);

