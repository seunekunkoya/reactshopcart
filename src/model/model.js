const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Please include the product name"],
    },
    price: {
        type: String,
        required: [true, "Please include the product price"],
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Product", productSchema);