const express = require('express')
const product = require('./products')

const router = express.Router()

router.use('/products', product)

module.exports = router