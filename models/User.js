const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    lastaname: {
        type: String,
        required: true
    },
    role: {
        type: Boolean,
        required:true,
        enum: []
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id_building: [{
        type: Schema.Types.ObjectId,
        ref: "Building"
    }],
    newMessages:Number,
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    }],
    canMessage: {
        type: Boolean,
        default: true
    },
    canInfo: {
        type: Boolean,
        default: true
    }
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;