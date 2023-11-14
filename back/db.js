import mongoose from "mongoose";

export const connection = async () => {
    try {
        await mongoose.connect('mongodb+srv://bactelifeWebApp:5LgWRqMnbXy7hJNp@webapp.7ovag2e.mongodb.net/?retryWrites=true&w=majority')
        console.log('successful connection');
    } catch (error) {
        console.log(error);
    }
}