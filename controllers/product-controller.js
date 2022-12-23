const {Products, DirIngredients, DirProductType, DirSkinType, DirSkinGoal} = require('../models')
const checkExists = require('../services/checkExists')
const httpStatus = require('http-status')

const findAll = async (req, res) => {
    try{        
        console.log('findAllProducts Triggered')
        console.log(req.body);
        const reqObj = {}
        for (let field in req.body){
            // if field contains info
            // console.log(`top: ${field}`)
            if (req.body[field]){
                // console.log(Array.isArray((req.body[field])))
                //  If field value is an array, restructure to lowercase
                if (Array.isArray((req.body[field]))){
                    reqObj[field]=[]
                    for (let item of req.body[field]){
                        try{
                        // console.log(item.split(' ')[0].toLowerCase())
                        reqObj[field].push(item.split(' ')[0].toLowerCase())
                        // console.log(reqObj[field])
                        }catch(e){
                            console.log(e)
                        }
                        
                    }
                }else{
                    reqObj[field] = req.body[field]
                }
                
            }
        }
        // Gotcha, filter above will omit 'sensitive' field if it is sent as false
        // if(!reqObj['sensitive']) reqObj['sensitive'] = false
        console.log(reqObj)
        // To restructure multiple fields into Obj
        // let queryObj = {}
        // for (let field in reqObj){
        //     for (let entry in reqObj[field]){

        //     }
        // }
        const result = await Products.find(reqObj).sort({name:1, productID:1}).exec();
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const create = async (req, res) => {
    console.log(req.body)
    try{
        // const resSkinType = req.body.skinType
        // for (ele of resSkinType){
        //     const querySkinType = await DirSkinType.find({skinType:ele})
        //     if (querySkinType.length < 1) {
        //         res.send(`Error! "${ele}" does not exist! in SkinType Directory!`)
        //     }
        // }

        // const resProductType = req.body.productType
        // for (ele of resProductType){
        //     const queryProductType = await DirProductType.find({productType:ele})
        //     if (queryProductType.length < 1) {
        //         res.send(`Error! "${ele}" does not exist! in ProductType Directory!`)
        //     }
        // }

        // // const resSkinGoal = req.body.skinGoal
        // // for (ele of resSkinGoal){
        // //     const querySkinGoal = await DirSkinGoal.find({skinGoal:ele})
        // //     if (querySkinGoal.length < 1) {
        // //         res.send(`Error! "${ele}" does not exist! in SkinGoal Directory!`)
        // //     }
        // // }
        
        // const resIngredients = req.body.ingredients
        // for (ele of resIngredients){
        //     const queryIngredients = await DirIngredients.find({ingredients:ele})
        //     if (queryIngredients.length < 1) {
        //         res.send(`Error! "${ele}" does not exist! in Ingredients Directory!`)
        //     }
        // }
        
        await Products.create(req.body)
        // res.send('completed successfully!')
        res.status(200).json('completed successfully!')
    }catch(e){
        console.log(e)
        res.status(400).json('creation failed!')
    }
}

const updateOne = async (req, res) => {
    if(req.body.productID){
        try{
            console.log(req.body)
            console.log(req.body.productID)
            // const id = req.params.id;
            const id = req.body.productID
            const toUpdate = {...req.body}
            delete toUpdate['productID']
            delete toUpdate['name']
            // console.log(toUpdate)
            const updated = await Products.updateOne({_id:id}, {$set:toUpdate});
            res.status(200).json(updated);
            // res.status(200).json('completed')
        }catch(e){
            console.error(e);
            res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
            // res.status(500).json(e);
        }
    }else{
        res.status(400).json('Please select product to update!');
    }
    
}

const deleteOne = async (req, res) => {
    if(req.body.productID){
        try{
            // const id = req.params.id;
            const id = req.body.productID
            const result = await Products.deleteOne({_id:id});
            res.status(200).json(result);
        }catch(e){
            console.error(e);
            res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        }
    }else{
        res.status(400).json('Please select product to delete!');
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


const deleteMany = async (req, res) => {
    try {
        const result = await Products.deleteMany(req.body)
        res.json(result)
    }catch(e){
        console.error(e)
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
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



module.exports = {
    create, findAll, deleteOne, updateOne, findOne, deleteMany, updateMany
}