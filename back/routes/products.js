import express from 'express'

import {
  createProduct,
  getProducts,
  getAllProducts,
  getProduct,
  editProduct,
  getTypeProducts
} from '../controllers/products.js'

const router = express.Router()

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/all', getAllProducts)
router.get('/type', getTypeProducts)
router.get('/:id', getProduct)
router.patch('/:id', editProduct)

export default router
