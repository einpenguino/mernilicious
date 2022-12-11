const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Endpoints
// app.post('/products', create);

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`listening to port ${process.env.EXPRESS_PORT}`)
})