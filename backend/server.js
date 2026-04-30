require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");

const ConnectDb = require("./config/db");
const TaskRoute = require("./router/task");

ConnectDb();

app.use(cors());
app.use(express.json());

app.use("/api/task", TaskRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});