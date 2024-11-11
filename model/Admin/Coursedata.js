const mongoose=require("mongoose")


const courseschema=mongoose.Schema({
    name:{ type: String},
    price: { type: Number},
    offerprice: { type: Number},
    document: { type: String},
    thumbnail: { type: String},
    video: { type: String},
    language:{type:String},
    category:{type:String},
    discription:{type:String},
},{ timestamps: true });

const coursedatamodel=mongoose.model("coursedata",courseschema)

module.exports=coursedatamodel;