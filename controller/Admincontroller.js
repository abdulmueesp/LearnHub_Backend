const Admindatamodel=require("../model/Admin/Admindata")

module.exports={
    signupPOST:async(req,res)=>{
        try{
       console.log("working");
        console.log(req.body);
        const newdata=new Admindatamodel(req.body)
        await newdata.save();
        
        }catch(error){
          console.log(`adminsignup post ${error}`);
          
        }
        
    }
}