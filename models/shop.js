const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    store_name: {
        type: String,
        required: true
    },
    store_url: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Shop = mongoose.model("shops", shopSchema);