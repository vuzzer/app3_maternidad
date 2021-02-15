const mongoose = require('mongoose')
const { generatePair } = require('../../crypto');

const keypair = generatePair()

const MotherSchema = mongoose.Schema({
    firstName: {type: String, },
    lastName: {type: String},
    cni: {type: String},
    typeCni :{type: String},
    birthday:{type: String},
    nationality: {type: String},
    locality:{type: String},
    privateKey:{type: String, default: keypair.privateKey, lowercase: true},
    publicKey:{type: String, default: keypair.publicKey, lowercase: true}
});

module.exports = mongoose.model('Father', MotherSchema);
