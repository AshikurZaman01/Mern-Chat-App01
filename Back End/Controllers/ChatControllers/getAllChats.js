const ChatModel = require("../../Models/ChatModel/chatSchema");

const getAllChats = async (req, res) => {

    try {

        const allChats = await ChatModel.find({ members: { $in: req.body.userId } });

        res.status(201).send({
            message: "Chat fetched successfully",
            success: true,
            data: allChats
        })


    } catch (error) {
        res.status(500).send({
            message: "Error while fetching chats",
            success: false,
            error: error.message
        })
    }

}
module.exports = getAllChats;