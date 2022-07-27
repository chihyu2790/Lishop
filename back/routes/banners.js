import express from 'express'

import {
  createBanner,
  getBanner,
  getAllBanners,
  deleteBanner,
  editBanner
} from '../controllers/banners.js'

const router = express.Router()

router.post('/', createBanner)
router.get('/:id', getBanner)
router.get('/all', getAllBanners)
router.delete('/:id', deleteBanner)
router.patch('/:id', editBanner)

export default router
