const { defaultFormatUtc } = require('moment')
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const roleSchema = new Schema ( {
    name: {
        type: String,
        required: true,
    }
    },
    {
        versionKey: false,
    }
)

const Role = mongoose.model('roles', roleSchema)

module.exports = Role