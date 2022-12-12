const express = require('express');
const {Products} = require('../models')
const app = express();
const {create, findAll, deleteOne, updateOne, findOne, updateMany, deleteMany} = require('../controllers/product-controller')
const {GenericCRUD} = require('../controllers/generic-controller-class')

// Middleware
app.use(express.json());

// Endpoints
app.get('/products', findAll)
app.get('/products/:id', findOne)
app.post('/products', create)
app.put('/products/:id', updateOne)
app.put('/products', updateMany)
app.delete('/products/:id', deleteOne)
app.delete('/products', deleteMany)

let p1 = new GenericCRUD(Products)
// app.post('/products', create);
app.get('/generic', 
    // console.log('findAll')
    // console.log(p1.findAll)
    // p1.findAll
    p1.printScheme
)
app.post('/generic', p1.create)

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`listening to port ${process.env.EXPRESS_PORT}`)
})