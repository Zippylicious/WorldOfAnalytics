const express = require('express');
const config = require('./config.js');
const User = require('./../schema/userSchema');
const jwt = require('jsonwebtoken');
const withAuth = require('./authentication.js');
const router = express.Router();

// TODO - register admin users in database (likely me and Dad). Then hide behind authentication.
router.post('/register', function(req, res) {
  var { email, password } = req.body;
  var User = new User({ email, password });
  User.save(function(err) {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});


router.post('/authenticate', function(req, res) {
  var { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
          });
        } else {
          var payload = { email };
          //TODO - Update this to be longer when actually in production. 1 minute only for testing purposes
          var token = jwt.sign(payload, secret, {
            expiresIn: '60000'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      });
    }
  });
});


router.get('/token', withAuth, function(req, res) {
  res.sendStatus(200);
});

module.exports = router;