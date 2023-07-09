import express from "express"
import { CreateVehicle, GetVehicle } from "../controllers/vehicles.js";



const router = express.Router();

router.post('/vehicle', CreateVehicle)
router.get('/vehicle', GetVehicle)



export default router