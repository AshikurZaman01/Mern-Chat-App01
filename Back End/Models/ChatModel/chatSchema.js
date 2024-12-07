const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({

    members: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: true,
    },

    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Messages'
    },

    unreadMsgCount: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

const ChatModel = mongoose.model('Chat', ChatSchema);
module.exports = ChatModel;
