const express = require('express');
var router = express.Router();


var {latestVehicles} = require('../models/latestVehicles');


router.get('/',(req,res)=>{
    latestVehicles.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retrieving Latest Vehicles :' + JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req, res)=>{;
    var lVehicles = new latestVehicles({
        id: req.body.id,
        model: req.body.model,
        year: req.body.year,
        company: req.body.company,
        price: req.body.price,
        engineCapacity: req.body.engineCapacity,
        fuelType:req.body.fuelType,
        transmission:req.body.transmission,
        age:req.body.age,
        mileage:req.body.mileage,
        priceOneYear:req.body.priceOneYear,
        priceTwoYear:req.body.priceTwoYear,
        priceFiveYearOne:req.body.priceFiveYearOne,
        priceFiveYearTwo:req.body.priceFiveYearTwo,
        priceFiveYearThree:req.body.priceFiveYearThree

    });
    lVehicles.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Employee Latest Vehicles :'+JSON.stringify(err,undefined,2));
        }
    });
});
//router.post('/myphoto',upload.single('productImage'),(req,res)=>{
   // console.log(req.file);
//});
router.get('/:vehicleModel',(req,res)=>{
    latestVehicles.findOne({model: req.params.vehicleModel})
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
