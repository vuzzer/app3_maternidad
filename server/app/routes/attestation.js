/**
 * This router serve to attest the father aand mother if children
 */

const express = require('express');
 const router = express.Router();
 const Mother = require('../models/mother');
 const Father = require('../models/father');

 router.post('/pere', (request, response)=>{
    Father.create(request.body, (err, response)=>{
        if (err) throw err;
        console.log(responseData);
        response.send(JSON.stringify({fatherPublicKey: responseData.publicKey}))
    })
    response.send("ok");
 });

 router.post('/mere', (request, response)=>{
    Mother.findOneAndUpdate(request.body, (err, responseData)=>{
        if (err) throw err;
        console.log(responseData);
        response.send(JSON.stringify({motherPublicKey: responseData.publicKey}));
    })
 })


