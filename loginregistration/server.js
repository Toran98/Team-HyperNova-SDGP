const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/auth.route');
// const User = require('../models/user.model');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect('mongodb://localhost:27017/jwt');

const PORT = 6000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/checking', function(req, res){
   res.json({
      "Tutorial": "Welcome to the Node express JWT Tutorial"
   });
});

app.use('/api', api)

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});