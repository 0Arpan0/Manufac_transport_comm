const express = require("express")
const router = express.Router()


const {
    getTransporter,
    createTransporter,
    getTransporterById,
} = require( '../controller/transportController');
const {transporter, protect} = require("../middleware/authMiddleware")


router.route('/').post(protect,transporter,createTransporter).get(protect,transporter,getTransporter)

module.exports = router