import express from 'express'

import {
  createStyling,
  getStyling,
  getStylings,
  getMyStylings,
  getAllStylings,
  deleteStyling
} from '../controllers/stylings.js'

const router = express.Router()

router.post('/', createStyling)
router.get('/:id', getStyling)
router.get('/:id', getStylings)
// 以上兩個問一下
router.get('/', getMyStylings)
router.get('/all', getAllStylings)
router.delete('/:id', deleteStyling)

export default router
