const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const User = require("../modals/userModal");


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public




const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      photo: user.photo,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password,address,type } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    address,
    type
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      type: user.type,
      address: user.address,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  console.log(req.user);
  const user = await User.findById(req.user._id).populate("product");

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      photo: user.photo,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const getUserBySearch = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const user = await User.find({ ...keyword })
    .sort({ name: -1 })
    .limit(5);
  res.json(user);
});
const getAllUser = asyncHandler(async (req, res) => {
  const user = await User.find({});
  res.json(user); 
});

const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();

    res.json({
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

const deleteMultipleUser = async (req, res) => {
  // try {
  //   const selectedId = req.query.id;
  //   const deletedData = await User.deleteMany({ _id: { $all: selectedId } });
  //   if (deletedData) {
  //     res.json(`removed ${selectedId}`);
  //   } else {
  //     res.json("something went wrong");
  //   }
  // } catch (error) {
  //   res.json(error);
  // }
  console.log("hello")
};

module.exports = {
  authUser,
  registerUser,
  getUserProfile,
  updateUser,
  getAllUser,
  getUserBySearch,
  deleteMultipleUser,
  getUserById,
};
