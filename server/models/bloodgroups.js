const mongoose=require('mongoose');
const bloodGroupSchema=new mongoose.Schema({
    bloodType:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    }
});
const bloodGroupModel=mongoose.model("bloodgroups",bloodGroupSchema)
module.exports= bloodGroupModel;