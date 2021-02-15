const mongoose = require('mongoose');

const BlockSchema= mongoose.Schema({
    height: {type: String},
    blockchain: {type: String},
    parentHash: {type: String},
    nonce: {type: String},
    extrait: {type: Array},
    hash: {type: String}
});

module.exports = mongoose.model('Block', BlockSchema);