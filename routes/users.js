var express = require('express');
var router = new express.Router();
const UserModel = require("../models/User");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/:id", function(req, res, next) {
  UserModel.findById(req.params.id)
    .then(user => {
      console.log("user------------------------------------------------------------------------------------------")
      console.table(user)
      console.log("----------------------------------------------------------------------------------------------")

      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = router;
