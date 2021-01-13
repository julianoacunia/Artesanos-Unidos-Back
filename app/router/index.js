const express = require('express')
const product = require('./products')
const user = require('./users')
const categorie = require('./categories')
const payment = require('./payment')

const router = express.Router()

router.use('/products', product)
router.use('/users', user)
router.use('/categories', categorie)
router.use('/payment', payment)
router.use('/', require('../router/uploadImages'))

module.exports = router