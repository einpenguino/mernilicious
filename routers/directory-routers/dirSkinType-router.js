const {
    create, 
    findAll, 
    deleteOne, 
    updateOne, 
    findOne, 
    updateMany, 
    deleteMany
} = require('../../controllers/directory-controllers/dirSkinType-controller')

// DirSkinGoal
module.exports = (app) => {
    app.get('/skintype', findAll)
    app.get('/skintype/:id', findOne)
    app.post('/skintype', create)
    app.put('/skintype/:id', updateOne)
    app.put('/skintype', updateMany)
    app.delete('/skintype/:id', deleteOne)
    app.delete('/skintype', deleteMany)
}