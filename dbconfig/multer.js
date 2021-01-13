const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, 'direccion'))
    },
    filename: function(req, file, cd) {
        cb(null,`${file.filename}-${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})

module.exports = storage