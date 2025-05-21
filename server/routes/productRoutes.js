const express = require('express');
const router = express.Router();
const {getAllProducts,getProductsByMaxPrice,getFeaturedProducts,getProductsByMinRating,createProduct,editProduct,deleteProduct} = require('../controllers/productControllers')

router.get('/',getAllProducts);
router.post('/',createProduct);
router.patch('/:id',editProduct);
router.delete('/:id',deleteProduct);
router.get('/featured',getFeaturedProducts);
router.get('/price/:max',getProductsByMaxPrice);
router.get('/rating/:min',getProductsByMinRating)


module.exports = router;