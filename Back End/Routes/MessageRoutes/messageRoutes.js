const express = require('express');
const newMessage = require('../../Controllers/MessageControllers/newMessage');
const isValidUser = require('../../Middlewear/ErrorHandler/AuthMiddlewear/authMiddleWe');
const getAllMessages = require('../../Controllers/MessageControllers/getAllMessages');
const router = express.Router();

router.post('/newMessage', isValidUser, newMessage);

router.get('/getAllMessages', isValidUser, getAllMessages);

module.exports = router;