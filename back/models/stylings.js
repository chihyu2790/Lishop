import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'staffs'
    // 屬於哪個店員
  },
  image: {
    type: String
    // 店員穿搭圖
  },
  description: {
    type: String
    // 店員介紹
  },
  category: {
    type: String
    // 店員系列
  },
  products: {
    type: [
      {
        product: {
          type: mongoose.ObjectId,
          ref: 'products'
          // 穿搭包含商品資訊
        },
        color: {
          type: String
          // ? number or string
          // 穿搭包含商品顏色
        },
        size: {
          type: String
          // ? number or string
          // 穿搭包含商品大小
        }
      }
    ]
  }
  // ? 是這樣寫products嗎
}, { versionKey: false })

export default mongoose.model('stylings', schema)
