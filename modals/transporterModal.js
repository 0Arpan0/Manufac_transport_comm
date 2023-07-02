const mongoose = require("mongoose");

const transporterSchema = mongoose.Schema(
  {
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Order',
    },    
    price: {
      type: Number,
    }
  },

);

const TransPorter = mongoose.model("TransPorter", transporterSchema);

module.exports = TransPorter;
