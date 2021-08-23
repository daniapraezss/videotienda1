const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Product = require("./routes/product");
const Sale = require("./routes/sale");
const Stock = require("./routes/stock");
const User = require("./routes/user");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/product", Product);
app.use("/api/sale", Sale);
app.use("/api/stock", Stock);
app.use("/api/user", User);
dbConnection();

app.listen(process.env.PORT, () => console.log("Server run, on port: ", process.env.PORT));