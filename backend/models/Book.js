// Where you can add new book(title of the book, author, published date)
// Where you can see the list of all books and user can enter a search query into an input field.
const mongoose = require("mongoose");
const moment = require("moment");

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    publishedDate:{
        type: String,
        default: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
});

const BookModel = mongoose.model("Book", BookSchema);

module.exports = { BookModel };
