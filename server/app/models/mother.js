const motherModel = require('../database/schema/mother')

let create = (data, callback) => {
    let mother = new motherModel({
        firstName: data.mother_firstName,
        lastName: data.mother_lastName,
        locality: data.mother_locality,
        nationality: data.nationality
    });
    mother.save(callback);
}

let findOneAndUpdate = (data, callback) => {
    motherModel.findOneAndUpdate({ publicKey: { $in: data.code } },
        {
            typeCni: data.mother_typeCni,
            birthday: data.mother_birthday
        },
        callback
    );
}


module.exports = {
    create,
    findOneAndUpdate
}
