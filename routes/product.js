const express = require('express');
const router = express.Router();
const Product = require('../model/Product');
const covertQueryStringToQuery = require('../utils/convertQuertParamsToQuery');

//get many
router.get('/', async (req, res) => {
    const {sort, priceMin, priceMax, page,...filters} = req.query;
    let query = {};
    const queryFilters = covertQueryStringToQuery(filters);
    query = { ...queryFilters }
    if(priceMin)
        query = { ...query, price: { $min: priceMin, $max: priceMax } }
    const products = await Product.find(query).sort({ [sort]: -1 });
    res.json(products);
})

//get one
router.get('/:id', async (req, res) => {

})

//insert one
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
})

//edit one
router.put('/', async (req, res) => {

})

module.exports = router;