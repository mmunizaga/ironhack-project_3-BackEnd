const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
    from: {type: Schema.Types.ObjectId, ref: "User"},
    to: {type: Schema.Types.ObjectId, ref: "User"},
    sendDate: Date,
    textContent: String
});

const messageModel = mongoose.model("Message", messageSchema);
module.exports = messageModel;