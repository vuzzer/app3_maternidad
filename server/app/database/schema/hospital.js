const mongoose = require('mongoose');
const { generatePair } = require('../../crypto');
const keypair = generatePair()

const HospitalSchema = mongoose.Schema({
    name : {type: String},
    code: {type: String},
    privateKey:{type: String, default: keypair.privateKey, lowercase: true},
    publicKey:{type: String, default: keypair.publicKey, lowercase: true}
});

module.exports = mongoose.model('Hospital', HospitalSchema);