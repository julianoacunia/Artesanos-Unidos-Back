const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ImageSchema = new Schema ({
    fileName: {
        type: String,
        require: true
    },
    urlFile: {
        type: String,
        require: true
    },
    dateUpload: {
        type: Date,
        default: Date.now(),
        require: true
    }
})

const Image = mongoose.model('Image', ImageSchema)
module.exports = Image