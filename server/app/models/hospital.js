const mongoose = require('mongoose');

const HospitalSchema = mongoose.Schema({
    name : {type: String},
    code: {type: String},
    publicKey: {type: String},
    privateKey:{type: String}
});

module.exports = mongoose.model('Hospital', HospitalSchema);