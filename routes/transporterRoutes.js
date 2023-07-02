const express = require("express")
const router = express.Router()


const {
    getTransporter,
    createTransporter,
    getTransporterById,
} = require( '../controller/transportController');
const {protect} = require("../middleware/authMiddleware")


router.route('/').post(protect,createTransporter).get(protect,getTransporter)

module.exports = router