const express = require("express");
const router = express.Router();
const UserController = require("../controllers/stock");

router.post("/createStock", UserController.createStock );
router.get("/listStock", UserController.listStock );

module.exports = router;