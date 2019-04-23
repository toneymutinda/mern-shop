const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    channel: {
        type: String,
        required: true
    },
   shop: {
       type: String,
       ref: 'Shop',
       required: true
   },
   created_at: {
        type: Date,
        default: Date.now()
   }
});

module.exports = Feed = mongoose.model("feeds", feedSchema);