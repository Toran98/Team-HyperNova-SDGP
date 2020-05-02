const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = require("../models/auth.model");
// const server = require('../server')
// const authorize = require("../middlewares/auth")
const User = require('../models/auth.model');

router.post('/signup', function(req, res) {
   bcrypt.hash(req.body.password, 10, function(err, hash){
      if(err) {
         return res.status(500).json({
            error: err
         });
      }
      else {
         const user = new User({
            _id: new  mongoose.Types.ObjectId(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hash,
            address: req.body.address,
            address2: req.body.address2,
            city: req.body.city,
            zip: req.body.zip,
            state: req.body.state
         });
         user.save().then(function(response) {
            // console.log(result);
            res.status(201).json({
               message: 'User successfully created!',
               result: response
            });
         }).catch(error => {
            res.status(500).json({
               error: error
            });
         });
      }
   });
});

router.post('/signin', function(req, res){
    userSchema.findOne({email: req.body.email})
    .exec()
    .then(function(user) {
       bcrypt.compare(req.body.password, user.password, function(err, result){
          if(err) {
             return res.status(401).json({
                failed: 'Unauthorized Access'
             });
          }

                if(result) {
                const JWTToken = jwt.sign({
                        email: user.email,
                        _id: user._id
                    },
                    'longer-secret-is-better',
                    {
                        expiresIn: '1h'
                    });
                    return res.status(200).json({
                       expiresIn:3600,
                        success: 'JWT',
                        token: JWTToken
                    });
                }

          if(result) {
             return res.status(200).json({
                success: 'Welcome to the JWT Auth'
             });
          }
          return res.status(401).json({
             message: 'Unauthorized Access'
          });
       });
    })
    .catch(error => {
       res.status(500).json({
          error: error
       });
    });;
 });


// Update User
router.route('/update-user').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            error: error
        } else {
            res.json(data)
           success: "sucessfuly updated"
        }
    })
})

// Delete User
router.route('/delete-user/').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                success: data
            })
        }
    })
})

module.exports = router;