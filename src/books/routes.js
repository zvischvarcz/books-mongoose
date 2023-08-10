const { Router } = require("express");
const bookRouter = Router() ;

const { addBook, getAllBooks, updateBook, deleteBook, deleteAllBooks, updateBookAuthor, getBookByTitle } = require("./controllers")

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getBooks", getAllBooks);
bookRouter.put("/books/updateBookAuthor", updateBookAuthor);
bookRouter.delete("/books/deleteBook", deleteBook);
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);
bookRouter.put("/books/updateBook", updateBook);
bookRouter.get("/books/getBook/:bookTitle", getBookByTitle);




module.exports = bookRouter