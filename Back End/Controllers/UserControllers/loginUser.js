const UserModel = require("../../Models/UserModel/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        // Check if user exists
        const user = await UserModel.findOne({ email: email }).select('+password');

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const matchedPassword = await bcrypt.compare(password, user.password);

        if (!matchedPassword) {
            return res.status(400).json({ message: "Password does not match." });
        }

        const token = jwt.sign(
            {
                userId: user._id,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1d",
            }
        )

        res.status(200).json({ success: true, message: "Login successful", token: token });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: "Login Failed.", error: error.message });
    }

}

module.exports = loginUser;
