const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({

    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat"
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    text: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    }

})

const MessageModel = mongoose.model('Message', messageSchema);
module.exports = MessageModel;