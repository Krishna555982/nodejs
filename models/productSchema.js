const Module = require("module");
const mongoose = require("mongoose");
const {Schema, model} = mongoose
const productSchema = new Schema({


    homeAppliencesname: {
        type: String
    },
    price: {
        type: Number
    },
    Model: {
        type: String
    },
    Avalibility: {
        type: Boolean,
    }
})
module.exports = model("Products", productSchema)