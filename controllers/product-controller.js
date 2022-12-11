const {Product} = require('../models')
const httpStatus = require('http-status')

const create = async (req, res) => {
    try{
        const result = await Product.create(req.body);
        res.json(result)
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

