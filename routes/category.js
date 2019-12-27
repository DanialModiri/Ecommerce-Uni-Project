const express = require('express');
const router = express.Router();
const Category = require('../model/Category')

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
    res.send(category);
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