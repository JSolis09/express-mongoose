const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: String,
    price: Number,
    id: String
});

module.exports = mongoose.model('Product', ProductSchema, 'products');