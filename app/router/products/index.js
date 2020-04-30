const express = require('express')
const controller = require('./controller')

const router = express.Router()
const { getAll, getByIdProveedor, insertProduct, upsertProduct, removeProduct, getByIdCategory } = controller

router.use(express.json())

router.get('/', getAll)
router.get('/:id', getByIdProveedor)
router.get('/:id', getByIdCategory)
router.post('/', insertProduct)
router.put('/:id', upsertProduct)
router.delete('/:id', removeProduct)


module.exports = router