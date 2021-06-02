const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const UserSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        dni: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        roles: {
            ref: 'roles',
            type: Schema.Types.ObjectId,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

UserSchema.statics.encryptPassword = async (password) => {
    return await bcrypt.hash(password,10);
}

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

const User = mongoose.model('users', UserSchema)

module.exports = User