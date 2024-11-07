const mongoose=require("mongoose")

const Categorydata=new mongoose.Schema({
    categoryname:{
        type:String
    }
})

const Categorydatamodel=mongoose.model('categorydata',Categorydata)
module.exports=Categorydatamodel