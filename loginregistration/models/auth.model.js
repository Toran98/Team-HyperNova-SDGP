// user.model.js

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   firstname: {type: String},
   lastname: {type: String},
   email: {type: String, required: true},
   password: {type: String, required: true},
   address: {type: String},
   address2: {type: String},
   city: {type: String},
   state: {type: String},
   zip: {type: String}
})
// {
//     collections: "users"
// }

module.exports = mongoose.model('User', userSchema);
// userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
// module.exports = mongoose.model('User', userSchema)