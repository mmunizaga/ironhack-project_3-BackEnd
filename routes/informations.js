const express = require("express");
const router = new express.Router();
const informationModel = require("../models/Information");
const uploader = require("./../config/cloudinary");


router.get("/", (req, res, next) => {
    informationModel
      .find()
    //   .populate("userOwner")
    //   .populate("likes")
      .then(informations => res.status(200).json(informations))
      .catch(next);
  });

  router.get("/:id", (req, res, next) => {
    informationModel
      .findById(req.params.id)
    //   .populate("userOwner")
    //   .populate("likes")
      .then(information => res.status(200).json(information))
      .catch(next);
  });

  router.post("/", uploader.single("multimediaContent"), (req, res, next) => {
      const {category, userOwner, publicationsDate, textContent, comments, likes} = req.body;
      console.log(req.file)
      const newInformation = {
        category,
        userOwner,
        publicationsDate,
        textContent,
        comments,
        likes
      };

      if(req.file){newInformation.multimediaContent = req.file.secure_url}

      informationModel
        .create(newInformation)
        .then(dbRes => res.status(200).json(dbRes))
        .catch(next)
  });

  router.patch("/:id", uploader.single("multimediaContent"), (req, res, next) => {
    const {category, userOwner, publicationsDate, multimediaContent, textContent, comments, likes} = req.body;
    const updateInformation = {
      category,
      userOwner,
      publicationsDate,
      multimediaContent,
      textContent,
      comments,
      likes
    };

    informationModel
      .findByIdAndUpdate(req.params.id, updateInformation, {new:true})
      .then(dbRes => res.status(200).json(dbRes))
      .catch(next)
});

router.delete("/:id", (req, res, next) => {
    informationModel
        .findByIdAndDelete(req.params.id)
        .then(dbRes => res.status(200).json(dbRes))
        .catch(next)
});

module.exports = router

