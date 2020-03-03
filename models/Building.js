const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingSchema = new Schema ({
    name: {
        type: String,
        unique: true,
        required: true
    },
    adress: {
        number: Number,
        street: String,
        postalcode: String,
        city: String,
        country: String
    },
    informations: [{type: Schema.Types.ObjectId, ref:"Information"}],
    keys:{
        type: [String],
        validate: () => true
    }
});

const buildingModel = mongoose.model("Building", buildingSchema);
module.exports = buildingModel;