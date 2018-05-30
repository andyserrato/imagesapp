const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const IMAGES_ROUTE = 'public/images/shoes';
// GET
// images/ serve a list of all images
/* GET users listing. */
router.get('/', function (req, res, next) {
  const shoesPath = path.join(__dirname, 'public/images/shoes');
  console.log(shoesPath);
  console.log(fs.statSync(IMAGES_ROUTE).isDirectory());
  fs.readdir(shoesPath, (err, files) => {
    if (files)
      files.forEach(file => {
        console.log(file);
      });
    else
      console.log(files)
  })

  res.send('hola');
});

module.exports = router;

// images/random serve an image randomly
// images/{name}

// POST
//images/ upload an image be carefull with the size limit and everything