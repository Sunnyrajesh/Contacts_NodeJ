const express = require("express");
const errorHandler = require("./MiddleWare/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const PORT = process.env.PORT || 3000;

// Apply the JSON parsing middleware before defining the routes
app.use(express.json()); // helps to parse the data which we will receive from client

app.use("/api/contacts", require('./routes/ContactRoutes'));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON ${PORT}`);
});
