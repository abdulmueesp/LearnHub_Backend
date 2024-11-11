const express=require("express")
const router=express.Router();
const admincontroller=require("../controller/Admincontroller")
const categorycontroller=require("../controller/Categorycontroller")
const coursecontroller=require("../controller/Coursecontroller")
const fileupload=require("../utility/multer")

router.post("/signup",admincontroller.signupPOST)
router.post("/login",admincontroller.LoginPOST)

router.get("/categorylist",categorycontroller.categoryGET)
router.post("/category",categorycontroller.categoryPOST)
router.delete("/categorydlt",categorycontroller.categoryDELETE)

// course 
router.post("/courseadd",fileupload,coursecontroller.courseaddPOST)



module.exports=router