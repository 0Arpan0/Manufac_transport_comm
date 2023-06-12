const mongoose = require("mongoose");

const transporterSchema = mongoose.Schema(
  {
    order_id: {
      type: String,
    },    
    price: {
      type: Number,
    }
  },

);

const TransPorter = mongoose.model("TransPorter", transporterSchema);

module.exports = TransPorter;
