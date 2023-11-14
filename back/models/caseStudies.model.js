import mongoose from "mongoose";

const caseStudiesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true
    },
    Image: {
        type: Image,
        requierd: true
    }
})