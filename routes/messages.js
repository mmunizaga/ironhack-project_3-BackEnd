const express = require("express");
const router = new express.Router();
const messageModel = require("../models/Message");
const userModel = require("../models/User");

router.get("/", (req, res, next) => {
  messageModel
    .find()
    .populate("from")
    .populate("to")
    .then(messages => res.status(200).json(messages))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  messageModel
    .findById(req.params.id)
    .then(message => res.status(200).json(message))
    .catch(next);
});

router.post("/", (req, res, next) => {
  const { from, to, sendDate, textContent } = req.body;
  const newMessage = {
    from,
    to,
    sendDate,
    textContent
  };

  messageModel
    .create(newMessage)
    .then(dbRes => {
      res.status(200).json(dbRes);
      userModel
        .findByIdAndUpdate(
          req.body.from,
          { $inc: { newMessages: 1 }, $push: { messages: dbRes._id } },
          { new: true }
        )
        .then(dbRes => console.log("OK NEW MESSAGE"))
        .catch(next);
    })
    .catch(next);
});

router.patch("/:id", (req, res, next) => {
  const { from, to, sendDate, textContent } = req.body;
  const updateMessage = {
    from,
    to,
    sendDate,
    textContent
  };

  messageModel
    .findByIdAndUpdate(req.params.id, updateMessage, { new: true })
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next);
});

router.delete(":/id", (req, res, next) => {
  messageModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => res.status(200).json(dbRes))
    .catch(next);
});

module.exports = router;
