const router = require('express').Router();
const product = require('./product');
const category = require('./category');

router.use('/categories', category);
router.use('/products',product);

module.exports = router;