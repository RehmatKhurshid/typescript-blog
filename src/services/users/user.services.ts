import mongoose from "mongoose";

import User from "../../models/user/user.models";

import { IUser } from "../../types/types";

import bcrypt from "bcrypt";

export const getAllUser = async () => await User.find();

// export const createuser = async (user : IUser) => await User.create(user);

export const createuser = async (user : IUser) => {
  
    const newUser = await User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        profilePic: user.profilePic
    });
    return newUser;
}

export const deleteUser = async (id : string) => await User.findByIdAndDelete(id);

export const updateuser = async (id : string, user : IUser) => await User.findByIdAndUpdate(id, user, {new : true});

export const getOne = async (id : string) => await User.findById(id);

