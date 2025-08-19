const jWT = require("jsonwebtoken")
const dotenv = require("dotenv")
const { statusCodes } = require("../constant/responseConstant")
dotenv.config()

const jwt_Secret = process.env.jwt_Secret

if (!jwt_Secret) {
throw new Error("JWT_SECRET is not defined in environment variables.");
}
//this is for generating the token
const generateToken =(payload) => {
    console.log("Payload",payload)
    return jWT.sign(payload,jwt_Secret)
}
//this is for verifying the token
const verifyToken = (token) => {
    return jWT.verify(token, jwt_Secret);
}

module.exports = {generateToken, verifyToken}