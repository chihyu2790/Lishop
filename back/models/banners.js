import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String
    // 活動名稱
  },
  image: {
    type: [String]
    // 活動大圖
  },
  description: {
    type: String
    // 活動介紹
  },
  category: {
    type: String
    // 活動系列
  },
  products: {
    type: [
      {
        type: mongoose.ObjectId,
        ref: 'products'
        // 活動商品
      }
    ]
  }
  // ? 是這樣寫products嗎
}, { versionKey: false })

export default mongoose.model('banners', schema)
