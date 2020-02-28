const express = require("express");
const router = new express.Router();
const buildingModel = require("../models/Building");

router.get("/", (req, res, next) => {
  buildingModel
    .find()
    .populate("informations")
    .populate("users")
    .then(buildings => res.status(200).json(buildings))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  buildingModel
    .findById(req.params.id)
    // .populate("informations")
    // .populate("users")
    .then(building => res.status(200).json(building))
    .catch(next)
});

router.post("/", (req,res,next) => {
  const {name, number, street, postalcode, city, country, keys} = req.body;
  const newBuilding = {
    name,
    adress:{
      number,
      street,
      city,
      postalcode,
      country
    },
    keys
  };

  buildingModel
    .create(newBuilding)
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next)
});

router.patch("/:id", (req,res,next) => {
  const {name, number, street, postalcode, city, country, keys} = req.body;
  const updateBuilding = {
    name,
    adress:{
      number,
      street,
      postalcode,
      city,
      country
    },
    keys
  }

  buildingModel.findByIdAndUpdate(req.params.id, updateBuilding, {new:true})
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next)
});

router.delete("/:id", (req,res,next) => {
  buildingModel.findByIdAndDelete(req.params.id)
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next)
});

module.exports = router;
