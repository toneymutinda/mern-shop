const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    shop: {
        type: String,
        ref: 'Shop',
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    sales_price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Product = mongoose.model("products", productSchema);