const UserModel = require("../../Models/UserModel/UserSchema");

const getAllUsers = async (req, res) => {

    try {

        const allUsers = await UserModel.find({ _id: { $ne: req.body.userId } }).sort({ createdAt: -1 })

        res.status(200).json({ success: true, message: "All users", allUsers })

    } catch (error) {
        res.status(500).json({ success: false, message: "Error", error })
    }

}

module.exports = getAllUsers;