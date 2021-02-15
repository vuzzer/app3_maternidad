"use strict";

const express = require('express');
const router = express.Router();
const Mother = require('../models/father');
const Father = require('../models/father');
const sendSms = require('../config/nexmo');
const Responsable = require('../models/responsable');

router.post('/', (request, response)=>{ 
    let body = request.body;
    Mother.create(body, (err, mother)=>{
        if (err) throw err;
        else console.log(mother);
        sendSms(process.env.FROM, body.own_tel, mother.publickey.substr(0, 10))
    }).then((body)=>{
        Responsable.create(body, (err, father)=>{
            if (err) throw err;
            else console.log(father);
        })
    })
    response.send("ok");
})
