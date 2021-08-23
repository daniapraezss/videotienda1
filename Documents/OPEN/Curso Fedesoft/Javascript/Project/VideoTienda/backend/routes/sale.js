const express = require("express");
const router = express.Router();
const UserController = require("../controllers/sale");

router.post("/createSale", UserController.createSale );
router.get("/listSale", UserController.listSale );

module.exports = router;