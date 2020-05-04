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
        id:{type: String}, 
        model:{type: String},
        year:{type: String},
        company:{type: String,required:true},
        price:{type: String},
        engineCapacity:{type: String},
        fuelType:{type: String},
        transmission:{type: String},
        age:{type: String},
        mileage:{type: String},
        priceOneYear:{type:String},
        priceTwoYear:{type:String},
        priceFiveYearOne:{type:String},
        priceFiveYearTwo:{type:String},
        priceFiveYearThree:{type:String}

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

router.get('/:vehicleModel',(req,res)=>{
    vehicles.findOne({model: req.params.vehicleModel})
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
