const express = require("express");
const { getRequests, postRequest } = require("../controllers/bookController");

const router = express.Router();

router.get("/request", getRequests);
router.post("/add-request", postRequest);

module.exports = router;
