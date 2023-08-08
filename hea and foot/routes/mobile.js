import express from 'express'
const router = express.Router()
import { mobileController } from '../controllers/mobileController.js'

router.get('/',mobileController)



export default router 