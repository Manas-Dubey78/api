const mongoose = require("mongoose"); //structure 
const  productsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        },
        image: {
            type: String,
            },
            creayedAt: {
                type: Date,
                default: Date.now(),
            },
            company: {
                type: String
                }

    
    });
    const Product = mongoose.model("Product", productsSchema);
    module.exports = Product;

