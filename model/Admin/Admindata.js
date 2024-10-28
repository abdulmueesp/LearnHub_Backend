const mongoose=require("mongoose")

const Admindata= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const Admindatamodel=mongoose.model('admindata',Admindata)
module.exports=Admindatamodel