const express = require('express');
const router = express.Router();
const Extrait = require('../models/extrait');
const { route } = require('./stats');

router.post('/', (request, response)=>{
    Extrait.create(request.body, (err, responseData)=>{
        if (err) throw err;
        console.log(responseData);
        response.send("ok");
    })
});

module.exports = router;