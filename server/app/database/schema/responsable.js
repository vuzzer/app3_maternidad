const mongoose = require('mongoose');

const ResponsableSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    tel: {type: String},
    locality: {type: String},
    nationality: {type: String} 
});

module.exports = mongoose.model('Responsable', ResponsableSchema);