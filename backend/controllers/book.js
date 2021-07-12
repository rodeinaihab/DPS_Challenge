const { BookModel } = require("../models/Book");

const create =  async (req, res) => {
    let post = {
        ...req.body,
    };
    BookModel.create(post).then( book => res.status(200).json({ msg: 'Book added successfully!!!'}))
        .catch(err => res.status(400).json({ msg: 'Unable to add this book!'}))
};

const listBooks = (req, res) => {
    BookModel.find({})
        .exec()
        .then( (books) => { return res.status(200).json(books) });
};

module.exports = {
    create,
    listBooks
};
