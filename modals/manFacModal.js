const mongoose = require("mongoose");

const manFacSchema = mongoose.Schema(
  {
    order_id: {
      type: String,
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
    }
  },

);

const ManFac = mongoose.model("ManFac", manFacSchema);

module.exports = ManFac;
