const express = require('express')
const controller = require('./controller')

const router = express.Router()
const { getAll, getById, insertProduct, upsertProduct, removeProduct } = controller

router.use(express.json())

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', insertProduct)
router.put('/:id', upsertProduct)
router.delete('/:id', removeProduct)

module.exports = router