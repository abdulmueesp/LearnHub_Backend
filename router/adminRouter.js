const express=require("express")
const router=express.Router();
const admincontroller=require("../controller/Admincontroller")

router.post("/signup",admincontroller.signupPOST)

module.exports=router