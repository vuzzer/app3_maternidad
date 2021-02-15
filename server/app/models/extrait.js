const { hashExtrait } = require('../crypto');
const extraitModel = require('../database/schema/extrait'); 

const create = (data, callback)=>{
    let hash = hashExtrait(data.fatherPublicKey, data.motherPublicKey, data.hospitalPublicKey);
    extraitModel.create({
        firstName: data.baby_firstName,
        lastName: data.baby_lastName,
        birthday: data.baby_birthday,
        hash: hash,
        locality: data.baby_locality,
        nationality: data.baby_nationality,
        fatherPublicKey: data.fatherPublicKey,
        motherPublicKey: data.motherPublicKey,
        hospitalPublicKey: data.hospitalPublicKey
    }, callback)
}

module.exports={
    create
}

