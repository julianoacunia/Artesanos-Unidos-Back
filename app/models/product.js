const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true
    },
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    categoryName: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const Product = mongoose.model('products', ProductSchema)

module.exports = Product