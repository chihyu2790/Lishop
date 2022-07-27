import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'users'
    // 訂單是誰的
  },
  name: {
    type: String
    // 收貨人名稱
  },
  phone: {
    type: Number
    // 收貨人手機
  },
  email: {
    type: String
    // 收貨人信箱
  },
  address: {
    type: String
    // 收貨人地址
  },
  getWay: {
    type: Number
    // 0、1區分取貨方式
  },
  products: {
    type: [
      {
        product: {
          type: mongoose.ObjectId,
          ref: 'products'
          // 商品資訊
        },
        quantity: {
          type: Number
          // 商品數量
        },
        color: {
          type: String
          // ? number or string
          // 商品顏色
        },
        size: {
          type: String
          // ? number or string
          // 商品大小
        }
      }
    ]
  },
  date: {
    type: Date,
    default: Date.now()
    // 訂單成立時間
  }
}, { versionKey: false })

export default mongoose.model('orders', schema)
