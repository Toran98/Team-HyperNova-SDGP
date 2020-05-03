const mongoose = require('mongoose');

const vehicles = mongoose.model('vehicles',{
    id:{type: String, required:true}, 
    model:{type: String, required:true},
    year:{type: String, required:true},
    company:{type: String, required:true},
    price:{type: String, required:true},
    engineCapacity:{type: String, required:true},

});

module.exports = {vehicles} ;