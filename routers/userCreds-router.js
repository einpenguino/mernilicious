const express = require('express')
const router = express.Router()
// const {
//     create, 
//     findAll, 
//     deleteOne, 
//     updateOne, 
//     findOne, 
//     updateMany, 
//     deleteMany
// } = require('../controllers/userCreds-controller')
const {auth} = require('../middleware/authMiddlware')
const {registerUser, authUser, allUsers} = require('../controllers/userCreds-controller')

// const endpointName = 'usercreds'
router.route("/").get(auth, allUsers)
router.route("/").post(registerUser)
router.post('/login', authUser)
// module.exports = (app) => {
    
//     app.get(`/${endpointName}`, findAll)
//     app.get(`/${endpointName}/:id`, findOne)
//     app.post(`/${endpointName}`, create)
//     app.put(`/${endpointName}/:id`, updateOne)
//     app.put(`/${endpointName}`, updateMany)
//     app.delete(`/${endpointName}/:id`, deleteOne)
//     app.delete(`/${endpointName}`, deleteMany)
// }

module.exports = router