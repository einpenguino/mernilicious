require('./directory');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const skinGoalMappingSchema = new Schema(
    {
        skinGoal:{
            type:Schema.Types.ObjectId, ref:'DirSkinGoal', required:true
        },
        activeIngredients:[
                {
                type:Schema.Types.ObjectId, ref: 'DirIngredients', required:true
            }
        ]
    }
)

module.exports = mongoose.model("SkinGoalMapping", skinGoalMappingSchema);