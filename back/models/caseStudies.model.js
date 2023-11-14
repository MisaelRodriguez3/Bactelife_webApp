import mongoose from "mongoose";

const caseStudiesSchema = new mongoose.Schema({
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
    imageURL: {
        type: String,
        requierd: true
    }
});

export default mongoose.model('Case Studies', caseStudiesSchema);