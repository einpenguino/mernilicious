const {
    create, 
    findAll, 
    deleteOne, 
    updateOne, 
    findOne, 
    updateMany, 
    deleteMany
} = require('../../controllers/directory-controllers/dirProductType-controller')

const endpointName = 'producttype'
module.exports = (app) => {
    app.get(`/${endpointName}`, findAll)
    app.get(`/${endpointName}/:id`, findOne)
    app.post(`/${endpointName}`, create)
    app.put(`/${endpointName}/:id`, updateOne)
    app.put(`/${endpointName}`, updateMany)
    app.delete(`/${endpointName}/:id`, deleteOne)
    app.delete(`/${endpointName}`, deleteMany)
}