const Product = require('../../models/product')

//Get all product method
const getAll = (req, res) => {
    Product.find({},(err, products) => {
        if (err) res.send({ msg:'can`t get the product list', error: err})
        res.send(products)
    })
}

module.exports = {
    getAll
}