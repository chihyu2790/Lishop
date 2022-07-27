import express from 'express'

import {
  createShop,
  getAllShops,
  deleteShop
} from '../controllers/Shops.js'

const router = express.Router()

router.post('/', createShop)
router.get('/all', getAllShops)
router.delete('/:id', deleteShop)

export default router
