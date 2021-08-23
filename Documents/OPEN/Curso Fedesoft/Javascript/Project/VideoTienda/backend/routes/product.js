const express = require("express");
const router = express.Router();
const UserController = require("../controllers/product");

router.post("/createProduct", UserController.createProduct );
router.get("/listProduct", UserController.listProduct );

module.exports = router;