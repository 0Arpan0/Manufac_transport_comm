const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    to: {
      type: String,
    },
    from: {
      type: String, 
    },
    quantity: {
      type: Number,
    },
    address:{
        type: String,
    },
    transporter:{
      type: String
    },
    pending:{
      type:Boolean,
      default:true
    }
  },

);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
