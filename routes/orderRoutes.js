const express = require("express")
const router = express.Router()


const {
    getOrder,
    createOrder
} = require( '../controller/orderController');
const {manFac, protect} = require("../middleware/authMiddleware")


router.route('/').post(protect,manFac,createOrder).get(protect,manFac,getOrder)

module.exports = router