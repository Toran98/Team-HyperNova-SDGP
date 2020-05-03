const express = require('express');
var router = express.Router();


var {vehicles}= require('../models/vehicles');

router.get('/',(req,res)=>{
    vehicles.find((err,docs)=>{
        if(!err){
            res.send(docs);}
        else{console.log('Error in Retrieving Vehicles :' + JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req, res)=>{
    var nVehicles = new vehicles({
        id: req.body.id,
        model: req.body.model,
        year: req.body.year,
        company: req.body.company,
        price: req.body.price,
        engineCapacity: req.body.engineCapacity

    });
    nVehicles.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Posting Vehicles :'+JSON.stringify(err,undefined,2));
        }
    });
});

router.get('/:vehicleCompany',(req,res)=>{
    vehicles.find({company: req.params.vehicleCompany})
    .exec()
    .then(function(doc){
        if (!doc) {
            throw new Error();
        }else{res.json(doc)};             
    })
    .catch((err)=>
    res.status(404).json({message: `Vehicle company could not be found!!`}));
});





module.exports = router;