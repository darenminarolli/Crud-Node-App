const Product = require('../models/product.model.js');
const getProducts = async(req,res)=>{
    try{
        const products = await Product.find({})
        res.status(200).json(products);
     }catch(error){
         res.status(500).json({message: ' Error message'})
     }
}

const getSingleProduct = async(req, res)=>{
    try{
     const { slug } = req.params;
     const product = await Product.findOne({ name: slug});
     res.status(200).json(product)
    }catch(error){
     res.status(404).json({message: error.message})
    }
}
const postProduct = async (req,res)=>{
    try{
     const product = await Product.create(req.body);
     res.status(200).json(product)
    }catch(error){
      res.status(500).json({message:'error'})
    }
   }

const updateProduct = async(req, res)=>{
    try{
      const {id} = req.params
      const product= await Product.findByIdAndUpdate(id,req.body);
      if(!product){
        return res.status(404).json({message: 'Product not found'})
      }
      const newProduct = await Product.findById(id);
      res.status(200).json(newProduct)

    }catch(error){
        res.status(500).json({message: error.message})
    }
}   

const deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params
      const product = await Product.findByIdAndDelete(id)
      const allProducts = await Product.find({});
     res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
module.exports = {getProducts, getSingleProduct, postProduct, updateProduct, deleteProduct}