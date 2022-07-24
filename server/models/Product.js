const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        min:3
    },
    price:{
        type:String,
        require: true
    },
    sub_catagory:{
        type:String,
        require: true,
        default:""
    },
    image:{
        type:String,
        default:""
    },
    description:{
        type:String,
        default:""
    },
  },
  {timestamps:true}
);

module.exports = mongoose.model("Product", ProductSchema);