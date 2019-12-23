const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
    products: [{
        product: { type: mongoose.SchemaTypes.ObjectId, ref: 'Product', required: true },
        garantee: { type: mongoose.SchemaTypes.ObjectId, ref: 'Garantee', required: true },
        price: { type: Number },
        off: { type: Number, min: 0, max: 99 },
        garanteeDuration: {type: Number},//Month
    }],
    status: { type: String, default: ['WAIT'] },
    totalPrice: Number
});

module.exports = mongoose.model('Order', orderSchema);

