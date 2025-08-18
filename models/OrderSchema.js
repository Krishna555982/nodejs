const Module = require("module");
const mongoose = require("mongoose")
const {Schema, model} = mongoose
const OrderSchema = new Schema ({


    ItemName: {
        type:String
    },
    ItemPrice: {
        type:Number
    },
    ItemModel: {
        type: String
    },
    OrderStatus: {
        type: String
    }
})