const express=require("express")
const router=express.Router();
const admincontroller=require("../controller/Admincontroller")

router.post("/signup",admincontroller.signupPOST)
router.post("/login",admincontroller.LoginPOST)

module.exports=router