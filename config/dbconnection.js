const mongoose=require('mongoose')


const dbconnection=async()=>{
    try{
         await mongoose.connect("mongodb://localhost:27017/Learnhub")
         console.log("database is connected");
         
    }catch(error){
        console.log(`connection failed ${error}`);
        
    }
}

module.exports=dbconnection