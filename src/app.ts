import express from 'express';

import { connectDB } from './utils/db';
import UserRoutes from './routes/user/user.routes';

import BlogRoutes from './routes/blog/blog.routes';



const app = express();

const PORT = 7000;

connectDB();


app.use(express.json());
app.use(express.urlencoded())

app.use('/api', UserRoutes)

app.use('/api', BlogRoutes)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})