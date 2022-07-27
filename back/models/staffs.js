import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  account: {
    type: String,
    unique: true
    // 店員帳號
  },
  password: {
    type: String,
    required: true
    // 店員密碼
  },
  tokens: {
    type: [String]
  },
  name: {
    type: String
    // ? 登入後使用者才要填的資料，是否要default
    // 店員姓名
  },
  gender: {
    // 0 = 男生
    // 1 = 女生
    // 2 = 無
    type: Number,
    default: 2
    // 店員性別
  },
  avatar: {
    type: String
    // ? 如果店員跟使用者共用，那資料可以有些填，有些不填嗎?
    // required () {
    //     return this.role===2
    // }
    // 店員大頭貼
  },
  introduction: {
    type: String
    // 店員介紹
  },
  shop: {
    // 哪種
    // type: String,
    type: mongoose.ObjectId,
    ref: 'shops'
    // 店員所屬店鋪
  }

}, { versionKey: false })

export default mongoose.model('staffs', schema)
