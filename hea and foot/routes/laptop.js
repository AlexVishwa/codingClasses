import express from 'express'
const router = express.Router()
import { laptopController } from '../controllers/laptopController.js'

router.get('/',laptopController)



export default router 