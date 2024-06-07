import express, { Router } from 'express';
import { createUserSchema, loginUserSchema, validateSchema } from '../../middlewares/user/user.middlewares';
import { createUser, getUserById, getUsers, login, removeUser, updateUser } from '../../controllers/user/user.controller';
import multer from 'multer';
import path from 'path';
import { loginUserValidator, registerUserValidator } from '../../middlewares/user/user.validator';


const router : Router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage})



router.post('/user', upload.single('profilePic'), registerUserValidator, validateSchema(createUserSchema),  createUser);
// router.post('/user', validateSchema(createUserSchema), createUser);

router.get('/user', getUsers);

router.delete('/user/:id',  removeUser);

router.patch('/user/:id', validateSchema(createUserSchema.partial()), updateUser);

router.get('/user/:id', getUserById);

router.post ('/login',loginUserValidator ,validateSchema(loginUserSchema), login);


export default router;




