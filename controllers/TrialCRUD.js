const GenericCRUD = require('./generic-controller')
const {Products} = require('../models')

let Products1 = new GenericCRUD (Products)

module.exports = Products1