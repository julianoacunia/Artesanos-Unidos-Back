const express = require('express')
const controller = require('./controller')
const functions = require('../../functions/index')

const router = express.Router()
const { getAll, getByIdProveedor, insertProduct, upsertProduct, removeProduct, getByNameCategory } = controller

router.use(express.json())

router.get('/',getAll)
router.get('/:id', getByIdProveedor)
router.post('/', insertProduct)
router.put('/:id', upsertProduct)
router.delete('/:id', removeProduct)


module.exports = router