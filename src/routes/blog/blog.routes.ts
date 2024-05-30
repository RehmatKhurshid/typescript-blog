import express, { Router } from 'express';
import { createBlog, getBlog, getBlogById, removeBlog, updateBlog } from '../../controllers/blog/blog.controllers';
import { createUserSchema, validateSchema } from '../../middlewares/user/user.middlewares';
import isAuthenticated from '../../middlewares/blog/blog.middleware';
import multer from 'multer';
import path from 'path';

const router : Router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'blogUploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage})


router.post('/blog',isAuthenticated , upload.single('imageUrl'), createBlog);

router.get('/blog', getBlog);

router.delete('/blog/:id', isAuthenticated,removeBlog);

router.patch('/blog/:id',isAuthenticated ,updateBlog);

router.patch('/blog/:id', isAuthenticated ,validateSchema(createUserSchema.partial()), updateBlog);


// router.get('/blog/:id', getBlogById);

export default router;




