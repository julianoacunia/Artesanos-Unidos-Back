const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema (
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
        id_category: {
            type: Schema.Types.ObjectId,
            ref:'categories',
            required: true
        }
    },
    {versionKey: false}
)

const Product = mongoose.model('products', ProductSchema)

module.exports = Product