var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
     id: Number,
     title: String,
     author: String,
     image: String,
     releaseDate: String
    // you should fill the rest of this in
 });

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;