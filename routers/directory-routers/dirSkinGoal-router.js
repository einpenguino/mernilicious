const {
    create, 
    findAll, 
    deleteOne, 
    updateOne, 
    findOne, 
    updateMany, 
    deleteMany
} = require('../../controllers/directory-controllers/dirSkinGoal-controller')

// DirSkinGoal
module.exports = (app) => {
    app.get('/skingoal', findAll)
    app.get('/skingoal/:id', findOne)
    app.post('/skingoal', create)
    app.put('/skingoal/:id', updateOne)
    app.put('/skingoal', updateMany)
    app.delete('/skingoal/:id', deleteOne)
    app.delete('/skingoal', deleteMany)
}