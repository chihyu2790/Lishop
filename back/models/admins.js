import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  account: {
    type: String,
    unique: true
    // 管理者帳號
  },
  password: {
    type: String,
    required: true
    // 管理者密碼
  },
  tokens: {
    type: [String]
  }
}, { versionKey: false })

export default mongoose.model('admins', schema)
