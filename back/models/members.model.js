import mongoose from "mongoose";

const membersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    imageURL: {
        type: String,
        required: true
    }
});

export default mongoose.model('Member', membersSchema);