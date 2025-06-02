const express = require("express");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const notFound = require("./middleware/notFound");
const router = require("./router");

const app = express();
app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use(globalErrorHandler);
app.use(notFound);

module.exports = app;
