
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const customersSchema = new Schema({
name: {
type: String,
trim: true
},
email: {
type: String,
trim: true
},
mobileNumber: {
type: Number,
trim: true
},
password: {
type: String,   
trim: true
},
isActive: {
    type: Boolean,
    default: false
}
})

module.exports = model("customers",customersSchema)