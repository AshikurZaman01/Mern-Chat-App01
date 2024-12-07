const ChatModel = require("../../Models/ChatModel/chatSchema");
const MessageModel = require("../../Models/MessageModel/messageSchema");

const newMessage = async (req, res) => {
    try {

        const newMessage = new MessageModel(req.body);
        const savedMessage = await newMessage.save();

        const currentChat = await ChatModel.findByIdAndUpdate({
            _id: req.body.chatId
        }, {
            lastMessage: savedMessage._id,
            $inc: { unreadMsgCount: 1 }
        })

        res.status(200).json({
            success: true,
            message: "Message Sent",
            data: savedMessage
        })


    } catch (error) {
        res.status(500).json({
            message: 'Error sending messages',
            success: false,
            error: error.message
        })
    }

}
module.exports = newMessage;