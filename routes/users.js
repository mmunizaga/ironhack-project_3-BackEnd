var express = require("express");
var router = new express.Router();
const userModel = require("./../models/User");
const uploader = require("./../config/cloudinary");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/", function(req, res, next) {
  userModel
    .find()
    .populate("buildings")
    .populate("messages")
    .then(users => res.status(200).json(users))
    .catch(next);
});

router.get("/:id", function(req, res, next) {
  userModel
    .findById(req.params.id)
    .populate("buildings")
    .populate("messages")
    .then(dbRes => { 
      let user = dbRes;
      user.password = ""
      res.status(200).json(user)})
    .catch(next);
});

router.patch("/:id",uploader.single("avatar"), (req, res, next) => {
  console.log(req.body);
  const {
    name,
    lastname,
    // role,
    email,
    // buildings,
    // newMessages,
    // canMessage,
    // canInfo
  } = req.body;
  const updateUser = {
    name,
    lastname,
    // role,
    email,
    // buildings,
    // newMessages,
    // canMessage,
    // canInfo
  };

  if(req.file) updateUser.avatar = req.file.secure_url;
 
  userModel
    .findByIdAndUpdate(req.params.id, updateUser, { new: true })
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next);
});

router.patch("/admin_edit/:id",uploader.single("avatar"), (req, res, next) => {
  console.log(req.body);
  const {
    role,
    canMessage,
    canInfo
  } = req.body;
  const editUser = {
    role,
    canMessage,
    canInfo
  };
 
  userModel
    .findByIdAndUpdate(req.params.id, editUser, { new: true })
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next);
});

router.patch("/no-new-messages/:id", (req, res, next) => {

  userModel
    .findByIdAndUpdate(req.params.id, {newMessages:0}, { new: true })
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next);
});

router.delete("/id", (req, res, next) => {
  userModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next);
});

module.exports = router;
