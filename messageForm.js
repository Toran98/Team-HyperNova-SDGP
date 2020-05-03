const mongoose = require('mongoose');

var messageForm = mongoose.model('messages',{
    name:{type: String}, 
    phone:{type: String},
    email:{type: String},
    subject:{type: String},
    message:{type: String},
    

});

module.exports = {messageForm} ;