import express from 'express'

import {
  createProduct,
  getProducts,
  getTypeProducts,
  getAllProducts,
  getProduct,
  editProduct
} from '../controllers/products.js'

const router = express.Router()

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:type', getTypeProducts)
// 上面這個
router.get('/all', getAllProducts)
router.get('/:id', getProduct)
router.patch('/:id', editProduct)

export default router
