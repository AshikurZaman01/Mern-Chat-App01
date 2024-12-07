const MessageModel = require("../../Models/MessageModel/messageSchema");

const getAllMessages = async (req, res) => {
    try {

        const allMessages = await MessageModel.find({ chatId: req.params.chatId }).sort({ createdAt: 1 });

        res.status(200).json({
            message: 'Messages fetched successfully',
            success: true,
            data: allMessages
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching messages',
            success: false,
            error: error.message
        })
    }
}
module.exports = getAllMessages;