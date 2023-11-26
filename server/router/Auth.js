const express = require("express");
const AuthController = require("../controllers/authentication");
const router = express.Router();

router.post("/signup", AuthController.createUser);
router.post("/login",AuthController.login);

module.exports = router;
