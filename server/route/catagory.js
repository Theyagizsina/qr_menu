const router = require("express").Router();
const Category = require("../models/Catagory")


//add catagory
router.post("/add", async (req, res) => {
    try{
        const newCatagory = new Category({
            name: req.body.name,
        });	

        const catagory = await newCatagory.save();
        res.status(200).json(catagory);
    } catch(err){
        res.status(500).json(err);
    }
});

//get catagory
router.get("/get", async (req, res) => {
    try{
        const catagory = await Category.find();
        res.status(200).json(catagory);
        console.log(catagory)
    } catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;