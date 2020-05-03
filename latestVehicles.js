const mongoose = require('mongoose');

var latestVehicles = mongoose.model('latestvehicles',{
    id:{type: String}, 
    model:{type: String},
    year:{type: String},
    company:{type: String,required:true},
    price:{type: String},
    engineCapacity:{type: String},

});

module.exports = {latestVehicles} ;