const express = require("express");
const { SignUpUser, LoginUser } = require("../controllers/User");
const router = express.Router();

router.post("/signup", SignUpUser);
router.post("/login", LoginUser);

module.exports = router;
