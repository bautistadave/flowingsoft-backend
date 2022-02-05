import express from 'express'
import { getTimes, createTime } from '../controller/timeController'

const router = express.Router()


router.get('/', getTimes)
router.post('/', createTime)

export default router