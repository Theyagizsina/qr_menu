const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:3,
        max:20
    },
    password:{
        type:String,
        require:true,
        min:6,
    },

    profilePicture:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
 },
 {timestamps:true}
 );

 module.exports = mongoose.model("User", UserSchema);