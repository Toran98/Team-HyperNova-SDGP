const mongoose = require('mongoose');

const vehicles = mongoose.model('vehicles',{
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

module.exports = {vehicles} ;
