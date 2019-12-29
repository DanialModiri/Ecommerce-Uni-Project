const express = require('express');
const router = express.Router();
const Product = require('../model/Product');
const covertQueryStringToQuery = require('../utils/convertQuertParamsToQuery');

//get many
/*router.get('/', async (req, res) => {
    const {sort, priceMin, category, priceMax, page, name,...filters} = req.query;
    const filtersQuery = covertQueryStringToQuery(filters);
    let products = Product.find(filtersQuery);
    if(name)
        products.find({ name });
    if(category)
        Product.find({ category });
    products.populate('category');
    const result = await products.then();
    res.json(result);
});*/

router.get('/', async (req, res) => {
    const { page = 0, perPage = 12, category, ...filters } = req.query;
    let query = {};
    const filtersParsed = covertQueryStringToQuery(filters);
    console.log(filtersParsed)
    if(category)
        query['category'] = category;
    if(filtersParsed)
        query = {...filtersParsed, ...query}
    const products = await Product.find(query).populate('category').skip((page) * perPage).limit(perPage);
    const length = await Product.find(query).countDocuments();
    res.send({list: products, count: length});
})

//get one
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category', ['_id', 'name']);
    res.send({ ...product._doc, ...product._doc.filters });
});

//insert one
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
});

//edit one
router.put('/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(product);
});

router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.send('با موفقیت حذف شد');
});

module.exports = router;