const {
    create : createProducts, 
    findAll : findAllProducts, 
    deleteOne : deleteOneProducts, 
    updateOne : updateOneProducts, 
    findOne : findOneProducts, 
    updateMany : updateManyProducts, 
    deleteMany : deleteManyProducts
} = require('../controllers/product-controller')

// Products
module.exports = (app) => {
    app.get('/products', findAllProducts)
    app.get('/products/:id', findOneProducts)
    app.post('/products', createProducts)
    app.put('/products/:id', updateOneProducts)
    app.put('/products', updateManyProducts)
    app.delete('/products/:id', deleteOneProducts)
    app.delete('/products', deleteManyProducts)
}