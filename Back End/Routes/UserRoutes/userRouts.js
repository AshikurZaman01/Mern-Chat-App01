const express = require("express");
const signInUser = require("../../Controllers/UserControllers/signInUser");
const loginUser = require("../../Controllers/UserControllers/loginUser");
const router = express.Router();

router.post("/signIn", signInUser);

router.post("/login", loginUser);

module.exports = router;