const ManFac = require("../modals/manFacModal");


const getmanFac = async (req, res) => {
  const manFac = await ManFac.find();
  res.json(manFac);
  console.log(req.user);
};


const createManFac = async (req, res) => {
  try {
    const {order_id, to, from, quantity, address, transporter} = req.body

    const manFac = await ManFac.create({
      order_id,
        to,
        from,
        quantity,
        address,
        transporter
    })

    if (manFac) {
      const manFac = new ManFac({
        order_id,
        to,
        from,
        quantity,
        address,
        transporter
      })
      }

      const createdManFac = await manFac.save()

      res.status(200).json(createdManFac)
   
  } catch (error) {
    console.log(error);
  }
};

// @desc    Get call log by their ids
// @route   GET /api/callLog/:id
const getManFacById = async (req, res) => {
  const callLog = await ManFac.findById(req.params.id);

  res.json(callLog);
  
};

module.exports = {
    getManFacById,
    createManFac,
    getmanFac,

};
