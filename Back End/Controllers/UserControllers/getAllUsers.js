const UserModel = require("../../Models/UserModel/UserSchema");

const getAllUsers = async (req, res) => {

    try {

        const allUsers = await UserModel.find({ _id: { $ne: req.body.userId } });

        res.status(200).json({ message: "All users", allUsers })

    } catch (error) {
        res.status(500).json({ message: "Error", error })
    }

}

module.exports = getAllUsers;