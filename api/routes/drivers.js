import express from "express"
import { CreateDriver, GetDriver } from "../controllers/driver.js";


const router = express.Router();

router.post('/driver', CreateDriver)
router.get('/driver', GetDriver)

GetDriver

export default router