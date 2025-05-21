const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default:false,
    },
    rating:{
        type: Number,
        required: true
    },
    company: {
        type:String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('Product',productSchema);