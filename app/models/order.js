const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number },
        name: { type: String },
        price: { type: Number },
      }
    ],
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'PAGADO',
    }
  },
  { versionKey: false }
)

const Order = mongoose.model('orders', OrderSchema)
module.exports = Order