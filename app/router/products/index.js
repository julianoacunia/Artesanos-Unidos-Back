const express = require('express')
const controller = require('./controller')
const functions = require('../../functions/index')
const verifyToken = require('../../middleware')

const router = express.Router()
const { getAll, getProductByProviderId, insertProduct, upsertProduct, removeProduct, getByNameCategory } = controller

router.use(express.json())

router.get('/', getAll)
router.get('/:id', getProductByProviderId)
router.post('/', insertProduct)
router.put('/:id', upsertProduct)
router.delete('/:id', removeProduct)


module.exports = router