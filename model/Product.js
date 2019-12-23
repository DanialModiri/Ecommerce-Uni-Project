const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    filters: mongoose.SchemaTypes.Mixed,
    specifications: mongoose.SchemaTypes.Mixed,
    category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
    description: { type: String, required: true },
    garantees: [
        {
            name: { type: String, required: true },
            duration: { type: Number, required: true },
            description: String,
            price: { type: Number, required: true }
        }
    ],
    price: Number,
    avableNumber: { type: Number, default: 0 },
    image: { type: String, required: true },
    images: [{ type: String, required: true }],
    off: [{ from: Date, to: Date, present: { type: Number, min: 1, max: 99 } }]

});

module.exports = mongoose.model('Product', productSchema);

