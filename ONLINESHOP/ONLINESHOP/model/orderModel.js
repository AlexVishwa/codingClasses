const { body } = require("express-validator");
const mongoose = require("mongoose");

// create schema
const orderSchema = new mongoose.Schema({
    "fname" : {type: String},
    "email" : {type: String, lowercase : true},
    "cnumber": { type: String },
    "address": { type: String },
    "city": { type: String },
    "postalCode": { type: String },
    "province": { type: String },
    "product1": { type: Number },
    "product2": { type: Number },
    "product3": { type: Number },
    "product4": { type: Number },
    "deliveryDate": { type: String},
    "sCharges": { type: Number },
    "taxes": { type: Number },
    "subtotal": { type: Number },

});

const Order = mongoose.model("orders",orderSchema);

module.exports = {
    Order
}