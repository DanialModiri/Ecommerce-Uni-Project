const mongoose = require('mongoose');
const UnqieErrorValidator = require('mongoose-unique-validator');

const categorySchema = new mongoose.Schema({
    parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'},
    name: { type: String, required: true, unique: true },
    filters: [
        { type: { type: String, required: true },name: { type: String, required: true }, label: { type: mongoose.SchemaTypes.Mixed, required: true } },
    ],
    specifications: [
        { type: { type: String, required: true },name: { type: String, required: true }, label: { type: mongoose.SchemaTypes.Mixed, required: true } },
    ],
    description: { type: String, maxlength: 1024 },
    hasParentFilters: { type: Boolean, default: false, required: true }
})

categorySchema.plugin(UnqieErrorValidator)

module.exports = mongoose.model('Category', categorySchema);