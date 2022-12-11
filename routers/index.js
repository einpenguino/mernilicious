const express = require('express');
const app = express();
const {create, findAll, deleteOne, updateOne, findOne, updateMany, deleteMany} = require('../controllers/product-controller')

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

// app.post('/products', create);

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`listening to port ${process.env.EXPRESS_PORT}`)
})