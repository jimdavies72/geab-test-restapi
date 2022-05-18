const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    value: Number,
    currency: String,
  },
  type: {
    type: String,
  },
  department: {
    type: String,
  },
  weight: {
    type: String,
  },
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
