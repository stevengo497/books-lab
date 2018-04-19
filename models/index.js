var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/whenpresident");
}

module.exports.Book = require("./book.js");
module.exports.Author = require("./author.js");

