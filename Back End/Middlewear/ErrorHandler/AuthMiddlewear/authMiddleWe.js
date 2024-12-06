const jwt = require("jsonwebtoken");


const isValidUser = async (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Please Login First" })
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.body.userId = decode.userId;

    next();
}

module.exports = isValidUser;