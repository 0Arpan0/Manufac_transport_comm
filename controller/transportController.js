const Transporter = require("../modals/transporterModal");


const getTransporter = async (req, res) => {
  const transporter = await Transporter.find();
  res.json(transporter);
};


const createTransporter = async (req, res) => {
  try {
    const {order_id, price} = req.body

    const transporter = await Transporter.create({
        order_id,
        price
    })

    if (transporter) {
       new Transporter({
        order_id,
        price
      })
      }

      const createdTransporter = await transporter.save()

      res.status(200).json(createdTransporter)
   
  } catch (error) {
    console.log(error);
  }
};

// @desc    Get call log by their ids
// @route   GET /api/callLog/:id
const getTransporterById = async (req, res) => {
  const transporter = await Transporter.findById(req.params.id);
  res.json(transporter);
  
};

module.exports = {
    getTransporter,
    createTransporter,
    getTransporterById,

};
