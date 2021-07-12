const express = require("express");
const router = express.Router();

const BookController = require("../controllers/book");

// configure the post route
router.post("/", BookController.create);
router.get("/", BookController.listBooks);

module.exports = router;
