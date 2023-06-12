const express = require("express")
const router = express.Router()


const {
  authUser,
  registerUser,
  getUserProfile,
  updateUser,
  getAllUser,
  getUserBySearch,
  deleteMultipleUser,
  getUserById
} = require( '../controller/userController')
const {protect} = require("../middleware/authMiddleware")

router.route('/').post(registerUser).get(protect)
router.post('/login', authUser)
router.route('/alluser').get(getAllUser)
router.route('/search').get(getUserBySearch)
router.route('/delete').delete(deleteMultipleUser)
router.route('/:id').put(updateUser).get(getUserById)



router
  .route('/profile')
  .get(protect, getUserProfile)

module.exports = router