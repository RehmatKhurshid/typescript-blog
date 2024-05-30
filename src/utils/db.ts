import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/typescript');
        console.log('mongoose connected successfully')
    } catch (error) {
        console.log('something went wrong in mongodb')
    }
}