const jwt = require("jsonwebtoken");

const isValidUser = async (req, res, next) => {
    // Check if the authorization header exists
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return res.status(401).json({ message: "Please Login First" });
    }

    // Split the token from "Bearer <token>"
    const token = authorizationHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }

    try {
        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!decode) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.body.userId = decode.userId;
        next();

    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token", error: error.message });
    }
};

module.exports = isValidUser;
