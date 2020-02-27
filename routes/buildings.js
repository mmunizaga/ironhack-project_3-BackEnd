var express = require("express");
var router = new express.Router();
const BuildingModel = require("../models/Building");

/* GET users listing. */

router.get("/", function(req, res, next) {
  res.send('select a building');
});

router.get("/:id", function(req, res, next) {
  BuildingModel.findById(req.params.id)
    .then(building => {
      console.table("building------------------------------------------------------------------------------------------")
      console.table(building)
      console.table("--------------------------------------------------------------------------------------------------")
      res.status(200).json(building);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = router;
