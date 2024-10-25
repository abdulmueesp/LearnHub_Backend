import express from 'express';
const router = express.Router();

const {signupPOST}=require("../controller/AdminController/Admindatascontroller")

router.post("/signup",signupPOST),


module.exports=router