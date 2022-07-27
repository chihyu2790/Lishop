import express from 'express'

import {
  register,
  login,
  logout,
  extend,
  getUser,
  addCart,
  editCart,
  getCart,
  addLike,
  deleteLike,
  getLike
} from '../controllers/users.js'

const router = express.Router()

router.post('/', register)
router.post('/login', login)
router.delete('/logout', logout)
router.post('/extend', extend)
router.get('/', getUser)
router.post('/cart', addCart)
router.patch('/cart', editCart)
router.get('/cart', getCart)
router.post('/like', addLike)
router.delete('/like', deleteLike)
router.get('/like', getLike)
export default router
