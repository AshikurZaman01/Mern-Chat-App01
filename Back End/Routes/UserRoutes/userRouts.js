const express = require("express");
const signInUser = require("../../Controllers/UserControllers/signInUser");
const loginUser = require("../../Controllers/UserControllers/loginUser");
const getLoggedUser = require("../../Controllers/UserControllers/getLoggedUser");
const isValidUser = require("../../Middlewear/ErrorHandler/AuthMiddlewear/authMiddleWe");
const router = express.Router();

router.post("/signIn", signInUser);

router.post("/login", loginUser);

router.get('/getLoggedUser', isValidUser, getLoggedUser);

module.exports = router;