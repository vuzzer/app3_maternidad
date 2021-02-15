const ResponsableModel = require('../database/schema/responsable');

let create = (data, callback) => {
    let Responsable = new ResponsableModel({
        firstName: data.own_firstname,
        lastName: data.own_lastName,
        tel: data.tel,
        locality: data.own_locality,
        nationality: data.own_nationality
    });
    Responsable.save(callback);
}

module.exports = {
    create
}
