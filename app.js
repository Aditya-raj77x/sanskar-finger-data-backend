const dotenv = require("dotenv");
dotenv.config();

const userrouter = require("./routes/userRouter.js");

const express = require("express");
const app = express();
const PORT = process.env.PORT;

const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
const connectdb = require("./db/connection.js");
const database = process.env.databasenew;
mongoose.set("strictQuery", false);
connectdb(database);
require("./Models/usertable.js");

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/user", userrouter);

app.listen(PORT, () => {
    console.log(`server is runing at ${PORT}`);
});