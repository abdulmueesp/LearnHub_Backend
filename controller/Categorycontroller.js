const Categorydatamodel=require("../model/Admin/Categorydata")

module.exports={

    categoryGET:async(req,res)=>{
        const data=await Categorydatamodel.find()
        res.status(201).json({data:data})
    },


    categoryPOST:async(req,res)=>{
        const existdata=await Categorydatamodel.findOne({categoryname:req.body.categoryname})

        if(existdata){
            return res.status(409).json({message:"category already exists!"})
        }
        const newcategory=new Categorydatamodel({
            categoryname:req.body.categoryname
        })
           await newcategory.save();
           const data=await Categorydatamodel.find();
           res.status(201).json({message:"saved!",category:data})
    },

     categoryDELETE:async(req,res)=>{
       const {id}=req.query
        await Categorydatamodel.findByIdAndDelete(id)
        const data=await Categorydatamodel.find() 
        res.status(201).json({message:"deleted",data:data})
     }
}