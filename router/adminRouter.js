const express=require("express")
const router=express.Router();
const admincontroller=require("../controller/Admincontroller")
const categorycontroller=require("../controller/Categorycontroller")

router.post("/signup",admincontroller.signupPOST)
router.post("/login",admincontroller.LoginPOST)


router.post("/category",categorycontroller.categoryPOST)

module.exports=router