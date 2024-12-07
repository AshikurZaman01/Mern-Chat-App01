const ChatModel = require("../../Models/ChatModel/chatSchema");

const createNewChat = async (req, res) => {

    try {

        const { members, lastMessage, unreadMsgCount } = req.body;

        // Validate that 'members' is an array with at least two members
        if (!Array.isArray(members) || members.length < 2) {
            return res.status(400).json({
                message: 'A chat must have at least two members.',
                success: false
            })
        }

        members.sort();

        // Check if a chat already exists between these members
        const existingChat = await ChatModel.findOne({ members: { $all: members } });

        const chat = new ChatModel(req.body);
        const savedChat = await chat.save();

        res.status(200).json({
            message: 'Chat created successfully',
            success: true,
            data: savedChat
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error creating chat',
            success: false,
            error: error.message
        })
    }

}
module.exports = createNewChat;