import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

import './passport/passport.js'
import usersRouter from './routes/users.js'
import productsRouter from './routes/products.js'
import ordersRouter from './routes/orders.js'
import shopsRouter from './routes/shops.js'
import stylingsRouter from './routes/stylings.js'
import bannersRouter from './routes/banners.js'

mongoose.connect(process.env.DB_URL)

const app = express()

app.use(express.json())

app.use((_, req, res, next) => {
  res.status(400).send({ success: false, message: '請求格式錯誤' })
})

app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)
app.use('/shops', shopsRouter)
app.use('/stylings', stylingsRouter)
app.use('/banners', bannersRouter)

app.all('*', (req, res) => {
  res.status(404).send({ success: false, message: '找不到' })
})

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running')
})
