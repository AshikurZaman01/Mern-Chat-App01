const UserModel = require("../../Models/UserModel/UserSchema");

const getLoggedUser = async (req, res) => {
    try {

        const user = await UserModel.findOne({ _id: req.body.userId });

        if (!user) {
            return res.status(200).json({ message: "User not found" })
        }

        return res.status(200).json({ success: true, message: "user fetch successfully", data: user })

    } catch (error) {
        console.error(error.message);

        return res.status(500).json({ success: false, message: "User Not Found. Internal Server Error", error: error.message });
    }
}
module.exports = getLoggedUser;