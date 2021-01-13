const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const PaymentSchema = new Schema (
    {
        tittle: {
            type:  String,
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
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        id_proveedor: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'users',
            required: true
        },
        category_name: {
            type: String,
            required: true
        }
    },
    {versionKey: false}
)

const Product = mongoose.model('products', ProductSchema)

module.exports = Product