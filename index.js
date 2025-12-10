const express=require("express");
const cors=require("cors");
const database=require("./db-connect/db");
const User=require("./models/User");

const app=express();
let port=21000;

database.connect();

app.use(express.json());
app.use(cors({
    origin:"*",
    credentials:true,
}));

app.get("/details",(req,res)=>{
    res.json({
        success:true,
        message:"Server Running Successfully",
    });
});

app.get("/db-status",(req,res)=>{
    const mongoose=require("mongoose");
    const status=mongoose.connection.readyState;
    const states={0:"disconnected",1:"connected",2:"connecting",3:"disconnecting"};
    res.json({
        success:true,
        database:states[status],
        status:status
    });
});

app.post("/add-user",async(req,res)=>{
    try{
        const user=new User(req.body);
        await user.save();
        res.json({success:true,data:user});
    }catch(error){
        res.status(400).json({success:false,error:error.message});
    }
});

app.get("/users",async(req,res)=>{
    try{
        const users=await User.find();
        res.json({success:true,data:users});
    }catch(error){
        res.status(400).json({success:false,error:error.message});
    }
});

app.listen(port,async()=>{
    console.log(`Server Running Successfully in port ${port}`);
});