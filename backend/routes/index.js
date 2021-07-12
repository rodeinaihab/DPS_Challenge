const express = require("express");

const api = express.Router()
    .use("/books", require("./book"));

module.exports = { api };
