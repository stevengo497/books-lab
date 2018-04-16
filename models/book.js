var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
     title: String,
     author: String,
     image: String,
     release_date: Number
    // you should fill the rest of this in
 });

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;