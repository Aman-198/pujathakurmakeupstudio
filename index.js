const express = require("express");
const app = express();

//load config file from  .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middle to parse the json  request body
app.use(express.json());

// import rotes for TODO API
const todoRoutes = require("./routes/todo");

//mount the todo ASPI routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//connect the Databases

const dbConnect = require("./config/databases");
dbConnect();

//default Routes
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE Body<h1/>`);
});
