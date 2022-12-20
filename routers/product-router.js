const {
    create : createProducts, 
    findAll : findAllProducts, 
    deleteOne : deleteOneProducts, 
    updateOne : updateOneProducts, 
    findOne : findOneProducts, 
    updateMany : updateManyProducts, 
    deleteMany : deleteManyProducts
} = require('../controllers/product-controller')

const { auth } = require("../middleware/authMiddlware");

// Products
// module.exports = (app) => {
//     app.get('/products', findAllProducts)
//     app.get('/products/:id', findOneProducts)
//     app.post('/products', createProducts)
//     app.put('/products/:id', updateOneProducts)
//     app.put('/products', updateManyProducts)
//     app.delete('/products/:id', deleteOneProducts)
//     app.delete('/products', deleteManyProducts)
// }
const express = require('express')
const router = express.Router();
const endpointName = 'products'
router.route("/products").get(auth, findAllProducts);
// router.route(`/${endpointName}`).get(protect, findAllProducts)


module.exports = router;
// module.exports = (app) => {
//     app.get('/products', findAllProducts)
//     app.get('/products/:id', findOneProducts)
//     app.post('/products', createProducts)
//     app.put('/products/:id', updateOneProducts)
//     app.put('/products', updateManyProducts)
//     app.delete('/products/:id', deleteOneProducts)
//     app.delete('/products', deleteManyProducts)
// }

// module.exports = (app) => {
//     app.get(`/${endpointName}`, findAll)
//     app.get(`/${endpointName}/:id`, findOne)
//     app.post(`/${endpointName}`, create)
//     app.put(`/${endpointName}/:id`, updateOne)
//     app.put(`/${endpointName}`, updateMany)
//     app.delete(`/${endpointName}/:id`, deleteOne)
//     app.delete(`/${endpointName}`, deleteMany)
// }