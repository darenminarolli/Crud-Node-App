const express = require('express');
const router = express.Router();

const {getProducts, getSingleProduct, postProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js')

router.get('/',getProducts )

router.get('/:slug',getSingleProduct)

router.post('/',postProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)


module.exports = router