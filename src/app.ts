import express from 'express';

import { connectDB } from './utils/db';
import UserRoutes from './routes/user/user.routes';

import BlogRoutes from './routes/blog/blog.routes';
import { logger } from './utils/logger/logger';
import helmet from 'helmet';


const app = express();

const PORT = 7000;

connectDB();


app.use(express.json());
app.use(express.urlencoded())

//headers are a collection of smaller middleware functions that set security-related HTTP headers 
app.use(helmet());                          
app.use('/api', UserRoutes)
app.use('/api', BlogRoutes)


app.listen(PORT, () => {
    logger.info(`server is running on port ${PORT}`)
})