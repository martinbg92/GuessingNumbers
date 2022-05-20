const express = require('express');
const guesserService = require('../services/guesserService')();
const guesserController= require('../controllers/guesserController');

function routes(){
  const guesserRoute=express.Router();
  const controller= guesserController(guesserService);

  guesserRoute.route('/guesser/postNumberEntered').post(controller.postEnteredNumber);

  return guesserRoute;
}

module.exports = routes;
