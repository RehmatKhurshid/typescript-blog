import mongoose from "mongoose";
import { logger } from "./logger/logger";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/typescript');
        logger.info('mongoose connected successfully')
    } catch (error) {
        logger.error('something went wrong in mongodb')
    }
}