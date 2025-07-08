const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

router.post('/', productsControllers.createProduct);
router.get('/getAllProducts', productsControllers.getAllProducts);
router.get('/search', productsControllers.searchProducts);
router.get('/sortBy', productsControllers.sortProductsByPrice);


router.get('/:id', productsControllers.getProductById);
router.put('/:id', productsControllers.updateProduct);
router.delete('/:id', productsControllers.deleteProduct);

module.exports = router;


