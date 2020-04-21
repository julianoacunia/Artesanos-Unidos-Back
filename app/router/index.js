const express = require('express')
const product = require('./products')
const user = require('./users')

const router = express.Router()

router.use('/products', product)
router.use('./users', user)

module.exports = router