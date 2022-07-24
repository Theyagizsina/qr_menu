const router = require("express").Router();
const Product = require("../models/Product")


//add product
router.post("/add", async (req, res) => {
    try{
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            sub_catagory: req.body.sub_catagory,
            description: req.body.description,
        });	

        const product = await newProduct.save();
        res.status(200).json(product);
    } catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;