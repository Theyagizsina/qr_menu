const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        min:3
    },
    sub_message:{
        type:String,
        min:4
    },
    sub_catagory:{
        type:Array,
        default:[],
    },
    image:{
        type:String,
        default:""
    },
    items:{
        type:Array,
        default:[],
    },
  },
  {timestamps:true}
);

module.exports = mongoose.model("Category", CategorySchema);