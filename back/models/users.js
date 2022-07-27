import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  account: {
    type: String,
    unique: true
    // 使用者帳號
  },
  password: {
    type: String,
    required: true
    // 使用者密碼
  },
  email: {
    type: String,
    unique: true
    // 使用者信箱
  },
  tokens: {
    type: [String]
  },
  name: {
    type: String
    // ? 登入後使用者才要填的資料，是否要default
    // 使用者名字
  },
  gender: {
    // 0 = 男生
    // 1 = 女生
    // 2 = 無
    type: Number,
    default: 2
    // 使用者性別
  },
  birthday: {
    type: Date
    // ? String or Number or Date
    // 使用者生日
  },
  address: {
    type: String
    // 使用者地址
  },
  phone: {
    type: String
    // ? String or Number
    // 使用者電話
  },

  cart: {
    type: [
      {
        product: {
          type: mongoose.ObjectId,
          ref: 'products'
          // 使用者購物車商品資訊
        },
        quantity: {
          type: Number
          // 使用者購物車商品數量
        },
        color: {
          type: String
          // ? number or string
          // 使用者購物車商品顏色
        },
        size: {
          type: String
          // ? number or string
          // 使用者購物車商品大小
        }
      }
    ]
  },

  love: {
    type: [
      {
        product: {
          type: mongoose.ObjectId,
          ref: 'products'
          // 使用者喜愛商品資訊
        },
        color: {
          type: String
          // ? number or string
          // 使用者喜愛商品顏色
        },
        size: {
          type: String
          // ? number or string
          // 使用者喜愛商品大小
        }
      }
    ]
  }

}, { versionKey: false })

export default mongoose.model('users', schema)
