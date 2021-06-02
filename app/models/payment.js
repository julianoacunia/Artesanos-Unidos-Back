const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const PaymentSchema = new Schema (
    {
        mercadoItems: {
            type:  String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const Payment = mongoose.model('payment', PaymentSchema)

module.exports = Payment