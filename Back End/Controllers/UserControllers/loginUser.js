const UserModel = require("../../Models/UserModel/UserSchema");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        // Check if user exists
        const user = await UserModel.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const matchedPassword = await bcrypt.compare(password, user.password);

        if (!matchedPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.status(200).json({ success: true, message: "Login successful" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: "Login Failed." });
    }

}
module.exports = loginUser;