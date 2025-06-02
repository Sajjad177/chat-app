const express = require("express");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const notFound = require("./middleware/notFound");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use(globalErrorHandler);
app.use(notFound);

module.exports = app;
