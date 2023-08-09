const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String
    },
    genre: {
        type: String
    }
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
