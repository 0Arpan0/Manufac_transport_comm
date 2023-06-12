const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./config/db");
// const path = require("path");
const manFacRoute = require("./routes/manFacRoutes");
const tranporterRoute = require("./routes/transporterRoutes");
const userRoutes=require("./routes/userRoutes");
// const productRoutes = require("./routes/productRoutes");
// const movieRoutes = require("./routes/movieRoutes")
// const callLogRoute = require("./routes/callLogRoute");
const cors = require('cors');

dotenv.config()
connectDb()

// app.get('/', (req,res) => {
//     res.send("Server is Running")
// })
app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/manFac', manFacRoute)
app.use('/api/tranporter', tranporterRoute)
// app.use('/api/product', productRoutes)
// app.use('/api/movie', movieRoutes)
// app.use("/api/callLog", callLogRoute);


// const dirname = path.resolve();
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(dirname, '/frontend/build')))
  
//     app.get('*', (req, res) =>
//       res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html')) 
//     )
//   } else {
//     app.get('/', (req, res) => {
//       res.send('API is running....')
//     })
//   }


const PORT = process.env.PORT


app.listen(PORT, console.log("server is running"))