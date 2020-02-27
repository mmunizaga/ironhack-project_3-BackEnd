const express = require("express");
const router = new express.Router();
const BuildingModel = require("../models/Building");

/* GET users listing. */

router.get("/", (req, res, next) => {
  res.send('select a building');
});

router.get("/:id", (req, res, next) => {
  BuildingModel.findById(req.params.id)
    .populate("informations")
    .populate("users")
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

router.post("/:id", (req,res,next) => {
  res.status(200).json()
})


router.patch("/:id", (req,res,next) => {
  res.status(200).json()
})

router.delete("/:id", (req,res,next) => {
  res.status(200).json()
})


module.exports = router;
