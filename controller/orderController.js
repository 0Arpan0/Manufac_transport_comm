const Order = require("../modals/orderModal");


const getOrder = async (req, res) => {
  const order = await Order.find();
  res.json(order);
  console.log(req.user);
};


const createOrder = async (req, res) => {
  try {
    const {to, from, quantity, address, transporter, user} = req.body

    const order = await Order.create({
        to,
        from,
        quantity,
        address,
        transporter,
        user:req.user._id
    })

    if (order) {
      const order=new Order({
        to,
        from,
        quantity,
        address,
        transporter,
        user
      })
      }

      const createdOrder = await order.save()

      res.status(200).json(createdOrder)
   
  } catch (error) {
    console.log(error);
  }
};

// @desc    Get call log by their ids
// @route   GET /api/callLog/:id
// const getManFacById = async (req, res) => {
//   const callLog = await ManFac.findById(req.params.id);

//   res.json(callLog);
  
// };

module.exports = {
    getOrder,
    createOrder,
};
