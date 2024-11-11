const coursedatamodel=require("../model/Admin/Coursedata")

module.exports={
    courseaddPOST:async(req,res)=>{

        const { name, price, offerprice, language, category, discription } = req.body;
        console.log(offerprice);
        

        const document = req.files['document'] ? req.files['document'][0].path : null; 
        const thumbnail = req.files['thumbnail'] ? req.files['thumbnail'][0].path : null;
        const video = req.files['video'] ? req.files['video'][0].path : null;
        
        const newcourse=new coursedatamodel({
            name,price,offerprice,language,category,discription,
            document,thumbnail,video
        })
        await newcourse.save();
        console.log("saved");
        
    }
}