import {Schema, model} from "mongoose";
import { IUser } from "../../types/types";

// interface IUser {
//     firstName : string,
//     lastName : string,
//     email : string,
//     password : string,
//     profilePic : strimg
// }

const userSchema = new Schema<IUser>({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    profilePic : {
        type : String
    }
},
{ timestamps: true })      

const User = model<IUser>('User', userSchema);

export default User;

