const Admindatamodel=require("../model/Admin/Admindata")
const bcrypt=require('bcryptjs')
const jwt =require("jsonwebtoken")
require('dotenv').config();
module.exports={
    signupPOST:async(req,res)=>{
        try{
       console.log("working");
        console.log(req.body);
       const existadmin=await Admindatamodel.findOne({email:req.body.email})

          if(existadmin){
            return res.status(409).json({ message: "Email already exists!" });
          }
          const hashedpassword=await bcrypt.hash(req.body.password, 10)

        const newdata=new Admindatamodel({
          ...req.body,
          password:hashedpassword,
        })
        await newdata.save();
        res.status(201).json({ message: "Your data has been saved successfully!" });
        }catch(error){
          console.log(`adminsignup post ${error}`);
          
        }
        
    },
    LoginPOST:async(req,res)=>{
      try{
        const {email,password}=req.body
        const admin=await Admindatamodel.findOne({email:email})
         if(!admin){
          return res.status(404).json({ message: 'Email not found!' });
         }
        const ispassword=await bcrypt.compare(password,admin.password)
        if(!ispassword){
          return res.status(401).json({ message: 'Password not match!' });
        }
          
        const token=jwt.sign(
          {id:admin._id,email:admin.email},
          process.env.JWT_SECRET,
          {expiresIn:'1h'}
        )  
        res.status(200).json({message: 'Login successful!', token})
          
           
      }catch(error){
        console.log(`error is admin login post ${error}`);
        
      }
    }
}