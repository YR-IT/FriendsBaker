const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },   // e.g. "Spiderman Chocolate Cake"
  slug: { type: String, required: true, unique: true }, // URL-friendly
  price: { type: Number, required: true },
  image: { type: String }, // image path or URL
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, // link to category
  subcategory: { type: String } // e.g. "spiderman-cakes", "photo-cakes"
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
