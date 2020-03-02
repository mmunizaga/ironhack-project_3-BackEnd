const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const informationSchema = new Schema ({
    category:{
        type:String,
        enum:["Social","Caring","Nearby","Admin Notices","General"],
        default: "General"
    },
    userOwner: {type: Schema.Types.ObjectId, ref: "User"},
    publicationDate: Date,
    multimediaContent: {
        type: String,
        default:"https://images.app.goo.gl/TYeFPxq989ETHiKq9"
    },
    textContent: String,
    comments:[{
        user: {type: Schema.Types.ObjectId, ref: "User"},
        textComment: String
    }],
    likes:[{type: Schema.Types.ObjectId, ref: "User"}]
});

const informationModel = mongoose.model("Information", informationSchema);
module.exports = informationModel;