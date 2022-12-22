const {Products, DirIngredients, DirProductType, DirSkinType, DirSkinGoal} = require('../models')
const checkExists = require('../services/checkExists')
const httpStatus = require('http-status')

const findAll = async (req, res) => {
    try{        
        console.log(req.body);
        const reqObj = {}
        for (field in req.body){
            if (req.body[field]){
                console.log(field)
                reqObj[field] = req.body[field]
            }
        }
        console.log(reqObj)
        const result = await Products.find(reqObj);
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const findOne = async (req, res) => {
    try{
        const id = req.params.id;
        const fetched = await Products.findOne({_id:id});
        res.json(fetched);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const create = async (req, res) => {
    try{
        const resSkinType = req.body.skinType
        for (ele of resSkinType){
            const querySkinType = await DirSkinType.find({skinType:ele})
            if (querySkinType.length < 1) {
                res.send(`Error! "${ele}" does not exist! in SkinType Directory!`)
            }
        }

        const resProductType = req.body.productType
        for (ele of resProductType){
            const queryProductType = await DirProductType.find({productType:ele})
            if (queryProductType.length < 1) {
                res.send(`Error! "${ele}" does not exist! in ProductType Directory!`)
            }
        }

        const resSkinGoal = req.body.skinGoal
        for (ele of resSkinGoal){
            const querySkinGoal = await DirSkinGoal.find({skinGoal:ele})
            if (querySkinGoal.length < 1) {
                res.send(`Error! "${ele}" does not exist! in SkinGoal Directory!`)
            }
        }
        
        const resIngredients = req.body.ingredients
        for (ele of resIngredients){
            const queryIngredients = await DirIngredients.find({ingredients:ele})
            if (queryIngredients.length < 1) {
                res.send(`Error! "${ele}" does not exist! in Ingredients Directory!`)
            }
        }
        
        await Products.create(req.body)
        res.send('completed successfully!')
    }catch(e){
        console.log(e)
        res.send(e)
    }
}

const updateOne = async (req, res) => {
    try{
        const id = req.params.id;
        const updated = await Products.updateOne({_id:id}, {$set:req.body});
        res.json(updated);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const updateMany = async (req, res) => {
    try{
        const result = await Products.updateMany(req.query, {$set:req.body})
        res.json(result)
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const deleteOne = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await Products.deleteOne({_id:id});
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const deleteMany = async (req, res) => {
    try {
        const result = await Products.deleteMany(req.body)
        res.json(result)
    }catch(e){
        console.error(e)
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}



module.exports = {
    create, findAll, deleteOne, updateOne, findOne, deleteMany, updateMany
}