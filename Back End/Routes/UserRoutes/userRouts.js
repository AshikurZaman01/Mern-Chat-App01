const express = require("express");
const signInUser = require("../../Controllers/UserControllers/signInUser");
const router = express.Router();

router.post("/signIn", signInUser);

module.exports = router;