import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String
    // 店名
  },
  phone: {
    type: Number
    // 門市電話
  },
  address: {
    type: String
  },
  time: {
    type: String
    // 開門時間
  },
  category: {
    type: String
    // 販賣系列
  }
}, { versionKey: false })

export default mongoose.model('shops', schema)
