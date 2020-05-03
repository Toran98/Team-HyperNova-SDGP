const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db.js');
var latestVehiclesController = require('./controllers/latestVehiclesController');
var vehiclesController = require('./controllers/vehiclesController');
var messageFormController = require('./controllers/messageFormController');

var app = express();
app.use(bodyParser.json());
console.log("Starting Server...");
app.listen(3000,()=> console.log('Server started at port : 3000'));

app.use((req,res,next)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept,Authorization"
    );
    if(req.method==='OPTIONS'){
        res.header('Acces-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/latestVehicles',latestVehiclesController);
app.use('/vehicles',vehiclesController);
app.use('/messageForm',messageFormController);