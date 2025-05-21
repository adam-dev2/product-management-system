const express = require('express');
const router = express.Router();
const {getAllProducts,getProductsByMaxPrice,getFeaturedProducts,getProductsByMinRating,createProduct,editProduct,deleteProduct} = require('../controllers/productControllers')
const authentication = require('../middleware/authentication')

router.get('/',authentication,getAllProducts);
router.post('/',authentication,createProduct);
router.patch('/:id',authentication,editProduct);
router.delete('/:id',authentication,deleteProduct);
router.get('/featured',authentication,getFeaturedProducts);
router.get('/price/:max',authentication,getProductsByMaxPrice);
router.get('/rating/:min',authentication,getProductsByMinRating)


module.exports = router;