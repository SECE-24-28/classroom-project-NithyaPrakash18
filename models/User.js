const mongoose = require("mongoose");
const User = new mongoose.Schema({
    firstName : {
        type : String,
        require : true,
    },
    secondName : {
        type : String,
    },
    email : {
        type : String,
        require : true,
    },
    mobile : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
})