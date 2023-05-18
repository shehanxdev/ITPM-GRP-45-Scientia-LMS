const express = require("express");
const { login, register } = require("../../controllers/auth.js");

const router = express.Router();

router.post("/api/login", login);
router.post("/api/register", register);

module.exports = router;
