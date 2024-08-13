const express = require("express");
const { AllUsers } = require("../controllers/GetUsers");

const router = express.Router();

router.get("/allUsers", AllUsers);

module.exports = router;
