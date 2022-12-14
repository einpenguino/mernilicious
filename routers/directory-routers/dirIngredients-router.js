const {
    create, 
    findAll, 
    deleteOne, 
    updateOne, 
    findOne, 
    updateMany, 
    deleteMany
} = require('../../controllers/directory-controllers/dirIngredients-controller')

// DirIngredients
module.exports = (app) => {
    app.get('/ingredients', findAll)
    app.get('/ingredients/:id', findOne)
    app.post('/ingredients', create)
    app.put('/ingredients/:id', updateOne)
    app.put('/ingredients', updateMany)
    app.delete('/ingredients/:id', deleteOne)
    app.delete('/ingredients', deleteMany)
}