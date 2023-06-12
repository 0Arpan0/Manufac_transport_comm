const express = require("express")
const router = express.Router()


const {
    getmanFac,
    createManFac,
    getManFacById,
} = require( '../controller/manFacController');
const {manFac, protect} = require("../middleware/authMiddleware")


router.route('/').post(protect,manFac,createManFac).get(protect,manFac,getmanFac)

module.exports = router