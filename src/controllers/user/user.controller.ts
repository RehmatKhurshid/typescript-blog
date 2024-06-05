import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../../models/user/user.models";
import { createuser, deleteUser, getAllUser, getOne, updateuser } from "../../services/users/user.services";
import jwt from "jsonwebtoken";
import { logger } from "../../utils/logger/logger";

export const createUser = async (req: Request, res: Response) => {
    try {

        console.log('req.file', req.file);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const userData = {
            ...req.body,
            password : hashedPassword,
            profilePic: req.file ? req.file.filename : null,
        }
        await createuser(userData);

        res.status(201).json({ message: "user created" });

    } catch (error) {
        logger.error('error in create user', JSON.stringify(error));
        return res.status(401).json({ message: 'error in create user' });
    }

}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const user = await getAllUser();
        logger.info('user', user)
        return res.status(200).json(user);
    } catch (error) {
        logger.error('error in get user', JSON.stringify(error));
        return res.status(401).json({ message: 'error in get users' });
    }

}

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const removeUser = async (req: Request, res: Response) => {
    try {
        const user = await deleteUser(req.params.id);
        return res.status(200).json({ message: 'user deleted' });

    } catch (error) {
        logger.error('error in get user', JSON.stringify(error));
        return res.status(401).json({ message: 'error in get users' });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await updateuser(req.params.id, req.body);
        return res.status(200).json(user);

    } catch (error) {
        logger.error('error in get user', JSON.stringify(error));
        return res.status(401).json({ message: 'error in update users' });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await getOne(req.params.id);
        return res.status(200).json({ user });
    } catch (error) {
        logger.error('error in get user', JSON.stringify(error));
        return res.status(401).json({ message: 'error in getUserById users' });
    }
}





export const login = async (req: Request, res: Response) => {

    try {
        const user = req.body;
        const { email, password } = user;
        const ifUserExists = await User.findOne({ email: email });
        if (!ifUserExists) {
            res.status(404).json({
                status: 404,
                success: false,
                message: "User not found",
            });
            return;
        }
        const isPasswordMatched = await bcrypt.compare(password, ifUserExists.password);
        if (!isPasswordMatched) {
            res.status(400).json({
                status: 400,
                success: false,
                message: "wrong password",
            });
            return;
        }
        const token = jwt.sign(
            {
                _id: ifUserExists?._id,
                email: ifUserExists?.email
            },
            "secret",
            { expiresIn: "1d" }
        )
        res.status(200).json({
            status: 200,
            success: true,
            message: "login success",
            token: token,
        });
    } catch (error) {

        logger.error('error in login user', JSON.stringify(error));
        return res.status(401).json({ message: 'error in login users' });
    }

}