import { body } from "express-validator";

export const registerUserValidator = [
    body('email', 'invalid, email cannot be empty').not().notEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('firstName', 'Invalid firstname').not().isEmpty().isLength({min : 3}),
    body('lastName', 'Invalid lastname').not().isEmpty().isLength({min : 3}),
    body('password', 'Invalid creds').not().isEmpty().isLength({min : 5}),
]


export const loginUserValidator = [
    body('email', 'invalid, email cannot be empty').not().notEmpty().isEmail(),
    body('password', 'Invalid creds').not().isEmpty().isLength({min : 5}),
]