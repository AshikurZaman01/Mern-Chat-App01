const bcrypt = require("bcrypt");
const UserModel = require("../../Models/UserModel/UserSchema");

const signInUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if the user already exists
        const user = await UserModel.findOne({ email: email });
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" }); // Return here to stop further execution
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        if (!hashedPassword) {
            return res.status(400).json({ success: false, message: "Password not hashed" }); // Return here to stop further execution
        }

        // Create a new user
        const newUser = new UserModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
        });

        // Save the new user to the database
        await newUser.save();

        // Send success response
        res.status(200).json({ success: true, message: "User created successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: "User not created." });
    }
};

module.exports = signInUser;
