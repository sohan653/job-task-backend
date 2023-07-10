const User = require("../models/user");

exports.signup=async(req,res)=>{
    console.log("aschi")
    const postBody=req.body;
    const {email}=postBody;
    const existingEmail=await User.find({email:email});
    if(existingEmail.length > 0){
        res.json({status:"failed",error:"email already exists"})
    }else{
        const newUser=await User.create(postBody);
        res.json({status:"success",user:newUser})

    }
}

exports.login=async (req,res)=>{
    const isFound=await User.find(req.body);
    if(isFound.length>0){
        res.json({status:"success",user:isFound});
    }else{
        res.json({status:"failed",error:"email or password did not match"})
    }

}