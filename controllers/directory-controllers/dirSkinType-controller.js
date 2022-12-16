const {DirSkinType:model} = require('../../models')
const httpStatus = require('http-status')

const findAll = async (req, res) => {
    try{        
        console.log(req.body);
        const result = await model.find(req.body).exec();
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const findOne = async (req, res) => {
    try{
        const id = req.params.id;
        const fetched = await model.findOne({_id:id});
        res.json(fetched);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const create = async (req, res) => {
    try{
        const result = await model.create(req.body);
        res.json(result)
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const updateOne = async (req, res) => {
    try{
        const id = req.params.id;
        const updated = await model.updateOne({_id:id}, {$set:req.body});
        res.json(updated);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const updateMany = async (req, res) => {
    try{
        const result = await model.updateMany(req.query, {$set:req.body})
        res.json(result)
        // console.log(req.query)
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const deleteOne = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await model.deleteOne({_id:id});
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const deleteMany = async (req, res) => {
    try {
        const result = await model.deleteMany(req.body)
        res.json(result)
    }catch(e){
        console.error(e)
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}



module.exports = {
    create, findAll, deleteOne, updateOne, findOne, deleteMany, updateMany
}