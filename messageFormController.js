const express = require('express');
var router = express.Router();

var {messageForm} = require('../models/messageForm');


router.post('/',(req, res)=>{
    var mForm = new messageForm({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body. email,
        subject: req.body.subject,
        message: req.body.message,
    });
    mForm.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Message :'+JSON.stringify(err,undefined,2));
        }
    });
});

module.exports = router;