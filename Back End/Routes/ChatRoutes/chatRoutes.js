const express = require('express');
const createNewChat = require('../../Controllers/ChatControllers/createNewChat');
const isValidUser = require('../../Middlewear/ErrorHandler/AuthMiddlewear/authMiddleWe');
const getAllChats = require('../../Controllers/ChatControllers/getAllChats');
const router = express.Router();

router.post('/create-new-chat', isValidUser, createNewChat);

router.get('/getAllChats', isValidUser, getAllChats);

module.exports = router;