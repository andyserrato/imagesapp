const express = require('express');
const router = express.Router();

// GET
// images/ serve a list of all images
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('hola');
  });
  
  module.exports = router;

// images/random serve an image randomly
// images/{name}

// POST
//images/ upload an image be carefull with the size limit and everything

