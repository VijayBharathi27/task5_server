const mongoose = require('mongoose');
const productSchema = require('./schema');
const product = mongoose.model('product', productSchema);
module.exports = product;