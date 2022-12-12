// const httpStatus = require('http-status')

// const GeneralCRUD = (Scheme) {
//     findAll (Scheme) {

//     }
// }

const {DirProductType} = require('../models')
// const {Products} = require('../models/prod')
const httpStatus = require('http-status')

class GenericCRUD {
    constructor (Scheme) {
        this.Scheme = Scheme
    }
    async findAll(req, res) {{
        try{
            console.log(req.query)
            const result = await this.Scheme.find(req.query).exec();
            res.send(result);
        }catch(e){
            console.error(e)
            res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        }
    }}
    async create(req, res) {{
        try{
            const result = await this.Scheme.create(req.body);
            return res.json(result)
        }catch(e){
            console.error(e)
            res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        }
    }}
    printScheme() {
        console.log(this.Scheme)
    }
}

module.exports = {GenericCRUD} 
// const findAll = async (req, res) => {
//     try{        
//         console.log(req.query);
//         const result = await Products.find(req.query).exec();
//         res.json(result);
//     }catch(e){
//         console.error(e);
//         res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
//     }
// }

// const findOne = async (req, res) => {
//     try{
//         const id = req.params.id;
//         const fetched = await Products.findOne({_id:id});
//         res.json(fetched);
//     }catch(e){
//         console.error(e);
//         res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
//     }
// }

// const create = async (req, res) => {
//     try{
//         const result = await Products.create(req.body);
//         res.json(result)
//     }catch(e){
//         console.error(e);
//         res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
//     }
// }

// const updateOne = async (req, res) => {
//     try{
//         const id = req.params.id;
//         const updated = await Products.updateOne({_id:id}, {$set:req.body});
//         res.json(updated);
//     }catch(e){
//         console.error(e);
//         res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
//     }
// }

// const updateMany = async (req, res) => {
//     try{
//         const result = await Products.updateMany(req.query, {$set:req.body})
//         res.json(result)
//         // console.log(req.query)
//     }catch(e){
//         console.error(e);
//         res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
//     }
// }

// const deleteOne = async (req, res) => {
//     try{
//         const id = req.params.id;
//         const result = await Products.deleteOne({_id:id});
//         res.json(result);
//     }catch(e){
//         console.error(e);
//         res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
//     }
// }

// const deleteMany = async (req, res) => {
//     try {
//         const result = await Products.deleteMany(req.body)
//         res.json(result)
//     }catch(e){
//         console.error(e)
//         res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
//     }
// }



// module.exports = {
//     create, findAll, deleteOne, updateOne, findOne, deleteMany, updateMany
// }