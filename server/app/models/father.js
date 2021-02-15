const fatherModel = require('../database/schema/father')

let create = (data, callback) => {
    let father = new fatherModel({
        firstName: data.father_firstName,
        lastName: data.father_lastName,
        locality: data.father_locality,
        nationality: data.father_nationality,
        typeCni: data.father_typeCni,
        birthday: data.father_birthday
    });
    father.save(callback);
}


module.exports = {
    create
}