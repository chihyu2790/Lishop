import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  image: {
    type: [String]
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: [String]
  },
  color: {
    type: [String]
  },
  size: {
    type: [String]
  },
  description: {
    type: String
  }
}, { versionKey: false })

export default mongoose.model('products', schema)
