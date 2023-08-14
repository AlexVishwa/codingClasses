const express = require("express");
const router = express.Router();

//Import Contollers and Validators
const {getOrder,postOrder} = require("../controllers/ordercontroller");
const {ValidateOrder} = require("../middleware/validator");
const {orderValidators} = require("../middleware/validator");
const { getAllOrders, getOneOrder , deleteOneOrder, updateOneOrder} = require("../controllers/ordersController");
// const orderModel = require("../ONLINESHOP/model/orderModel");

router
    .get("/",getOrder)
    .post("/",ValidateOrder,postOrder)
    .get("/orders",getAllOrders)
    .get("/order/:id", getOneOrder)
    .get("/delete/:id", deleteOneOrder)
	.post("/update/:id",updateOneOrder);





//Export The Router
module.exports = router;