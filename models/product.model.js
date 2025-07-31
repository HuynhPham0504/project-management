const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const productSchema = new mongoose.Schema({
  title: String, // Sản phẩm 1
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  slug: {  // san-pham-1
    type: String,
    slug: "title",
    unique: true
  },
  deleted: {
    type: Boolean,
    default: false
  },
    deletedAt: Date
}, {
  timestamps: true
});

const Products = mongoose.model('Product', productSchema, "products");

module.exports = Products