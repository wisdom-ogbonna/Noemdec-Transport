import express from "express"
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
import authRoute from "../routes/auths.js";
import driverRoute from "../routes/drivers.js";
import vehicleRoute from "../routes/vehicles.js";


dotenv.config()
const app = express()
app.use(express.json())
const port = 8090

app.use('/api/auth', authRoute)
app.use('/api/drive', driverRoute)
app.use('/api/vehicle', vehicleRoute)




mongoose.connect(process.env.MONGO)
  .then(() => console.log('connected successfully to mongodb'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})