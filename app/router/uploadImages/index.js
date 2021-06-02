const express = require('express')
const Image = require('../../models/image')
const storage = require('../../../dbconfig/multer')
const multer = require('multer')

const uploader = multer({storage})
const router = express.Router()

router.post('/upload', uploader.single('file'), async(req, res) => {
    const { file, body } = req
    if(file && body) {
        const newImage = new Image({
            fileName: body.name,
            urlFile: `http://localhost:5000/${file.fileName}`
        })
        await newImage.save()
        res.json({
            newImage: newImage
        })
    }
})

// ruta que el cliente desde react va a pedir
router.get('/download', async(req, res) => {
    const images = await Image.find()
    res.json(images)
})

module.exports = router