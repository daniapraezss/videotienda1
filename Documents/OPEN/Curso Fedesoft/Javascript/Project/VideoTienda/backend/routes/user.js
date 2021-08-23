const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

router.post("/createUser", UserController.createUser );
router.get("/listUser", UserController.listUser );

module.exports = router;