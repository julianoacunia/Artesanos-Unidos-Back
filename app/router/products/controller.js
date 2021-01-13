const Product = require('../../models/product')

//Get all product method
const getAll = (req, res) => {
    Product.find({},(err, products) => {
        if (err) res.send({ msg:'can`t get the product list', error: err})
        res.send(products)
    })
}
// Get proveedor id product method
const getByIdProveedor = (req, res) => {
    Product.find( {id_proveedor:req.params.id} , (err, products) => {
        if (err)
        res.send({ msg: `Cant't get the product ${req.params.id}`, error: err })
        res.send(products)
    })
}

// Get category id product method
const getByNameCategory = (req, res) => {
    console.log(req.params)
    Product.find( {category_name:req.params.category_name} , (err, products) => {
        console.log(err)
        if (err)
        res.send({ msg: `Cant't get the product ${req.params.name}`, error: err })
        res.send(products)
    })
}

// Insert product method
const insertProduct = (req, res) => {
    console.log(req.body)
    const product = new Product ({
        _id: req.body.id,
        tittle: req.body.tittle,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        img: req.body.img,
        id_proveedor: req.body.userId,
        category_name: req.body.category_name
    })
    product.save(err => {
        if (err) res.send({ msg: 'Cant`t save the product', error: err })
        res.send({ msg: 'product saved', data: product })
    })
}

// Upsert product method 
const upsertProduct = (req, res) => {
    Product.updateOne({ _id: req.params.id  }, { ...req.body }, err => {
        if (err)
        res.send({
          msg: `Cant't upsert the product ${req.params.id}`,
          error: err
        })
        res.send({ msg: 'Product upserted' })
    })
}

// Remove product method
const removeProduct = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id } ,(err, doc) => {
        if (err) return res.status(500).send(err)
        res.status(200).send(doc)
    })
}

module.exports = {
    getAll,
    getByIdProveedor,
    insertProduct,
    upsertProduct,
    removeProduct
}