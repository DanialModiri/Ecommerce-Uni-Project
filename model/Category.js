const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'},
    name: { type: String, required: true },
    filters: [
        { key: { type: String, required: true }, value: { type: mongoose.SchemaTypes.Mixed, required: true } },
    ],
    specifications: [
        { key: { type: String, required: true }, value: { type: mongoose.SchemaTypes.Mixed, required: true } }
    ],
    description: { type: String, maxlength: 1024 },
})

module.exports = mongoose.model('Category', categorySchema);