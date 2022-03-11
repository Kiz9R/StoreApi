const product=require('../models/product');

const getAllProductsStatic=async(req,res)=>{
    const products=await product.find({name:'high-back bench'});
    res.status(200).json({products,nbHits:products.length});
}

const getAllProducts=async(req,res)=>{
    res.status(200).json({msg:`product testing route`});
}

module.exports ={getAllProducts,getAllProductsStatic}