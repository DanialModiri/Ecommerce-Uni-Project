const express = require('express');
const router = express.Router();
const Category = require('../model/Category')
const Product = require('../model/Product');

//get many
router.get('/', async (req, res) => {
    const { q, ...query } = req.query;
    let categories = Category.find(query);
    if(q)
        categories = categories.find({ name:  {$regex: '.*'+q+'.*'} }).select(['name', 'id']);
    const result = await categories.then();
    res.send(result);
})


//get one
router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    const filters_values = {};
    for(const item of category._doc.filters){
        const values = await Product.distinct(`filters.${item.name}`, { category: req.params.id });
        filters_values[item.name] = {label: item.label ,list: values};
    }
    res.send({...category._doc, filters_values});
})

//insert one
router.post('/', async (req, res) => {
    const category = new Category(req.body);
    await category.save();
    res.send(category);
})

//edit one
router.put('/:id', async (req, res) => {

})

module.exports = router;