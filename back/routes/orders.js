import express from 'express'

import {
  createOrder,
  getOrder,
  getMyOrders,
  getAllOrders,
  deleteOrder,
  editOrder
} from '../controllers/orders.js'

const router = express.Router()

router.post('/', createOrder)
router.get('/:id', getOrder)
router.get('/', getMyOrders)
router.get('/all', getAllOrders)
router.patch('/:id', editOrder)
router.delete('/:id', deleteOrder)

export default router
