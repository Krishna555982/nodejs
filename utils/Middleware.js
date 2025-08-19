const { statusCodes } = require("../constant/responseConstant");
const { verifyToken } = require("./JSONWebToken")
const authenticate = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access token missing or invalid" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token)
    if (!decoded) {
        return res.status(statusCodes.BAD_REQUEST).json({message: "Token Invalid"})
    }
    req.user = decoded;
    next();
}

module.exports = authenticate;