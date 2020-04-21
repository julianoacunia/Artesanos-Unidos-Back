const Product = require('../../models/product')

//Get all product method
const getAll = (req, res) => {
    Product.find({},(err, products) => {
        if (err) res.send({ msg:'can`t get the product list', error: err})
        res.send(products)
    })
}

// Get id product method
const getById = (req, res) => {
    Product.findById(req.params.id, (err, products) => {
        if (err)
        res.send({ msg: `Cant't get the product ${req.params.id}`, error: err })
        res.send(products)
    })
}


module.exports = {
    getAll,
    getById
}