const Transporter = require("../modals/transporterModal");
//const Order=require("../modals/orderModal")

const getTransporter = async (req, res) => {
  try {
    const transporter = await Transporter.find({}).populate('order_id');
    var x;
    let y=req.user._id.toString();
    let arr = [];
    //console.log(y);
    //console.log(transporter.length);
    //const count = await Order.countDocuments();
    //console.log(count)
    for(var i=0;i<transporter.length;i++){
      x=transporter[i].order_id.user.toString();      
      console.log(x);
        if(x==y){
          arr.push(transporter[i])
          console.log(arr);
        }
    }
    for(var i=0;i<transporter.length;i++){
      res.json(arr)
    }
    //res.json(transporter);
  } catch (error) {
    console.log(error);
  }

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
