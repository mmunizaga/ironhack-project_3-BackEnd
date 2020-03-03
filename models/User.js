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
        enum: ["user", "admin", "super admin"],
        default: "user"
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
    avatar: {
        type: String
    },
    buildings: [{
        type: Schema.Types.ObjectId,
        ref: "Building",
        // required: true
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