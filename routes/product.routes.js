const express = require('express');
const router = express.Router();

const {getProducts, getSingleProduct, postProduct, updateProduct, deleteProduct, postImageRequest} = require('../controllers/product.controller.js')

router.get('/',getProducts )

router.get('/:slug',getSingleProduct)

router.post('/',postProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

router.post('/:slug', postImageRequest)
module.exports = router