import { Schema } from "mongoose";

export interface IUser {
    firstName : string,
    lastName : string,
    email : string,
    password : string,
    profilePic: string,
    // author: Schema.Types.ObjectId;
}

export interface  IBlog{
    title : string,
    description : string , 
    likeCount : number,
    comment : string,
    imageUrl : string ,
    author: Schema.Types.ObjectId;
}