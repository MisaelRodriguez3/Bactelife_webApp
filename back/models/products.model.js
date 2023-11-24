import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trime: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    pounds_per_yard: {
        type: Number,
        required: true
    },
    quarts_per_pound: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Product', productSchema);