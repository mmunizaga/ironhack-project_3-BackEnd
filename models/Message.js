const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
    users: [{type: Schema.Types.ObjectId, ref: "User"}],
    from,
    to,
    sendDate: Date,
    textContent: String
});

const messageModel = mongoose.model("Message", messageSchema);
module.exports = messageModel;