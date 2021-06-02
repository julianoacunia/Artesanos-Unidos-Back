const express = require('express')
const product = require('./products')
const user = require('./users')
const categorie = require('./categories')
const payment = require('./payment')
const auth = require('./auth')

const router = express.Router()

router.use('/public/product', express.static('app/public/product'))

router.use('/products', product)
router.use('/users', user)
router.use('/categories', categorie)
router.use('/payment', payment)
router.use('/', require('../router/uploadImages'))
router.use('/auth', auth)

module.exports = router