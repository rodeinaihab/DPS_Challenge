// Where you can add new book(title of the book, author, published date)
// Where you can see the list of all books and user can enter a search query into an input field.

const mongoose = require("mongoose");

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
        type: Date,
        default: Date.now,
    },
});

const BookModel = mongoose.model("Book", BookSchema);

module.exports = { BookModel };
