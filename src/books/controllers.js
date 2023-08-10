const Book = require("./model");


//Create

const addBook = async (req, res) => {

    try {
        // const newBook = await Book.create({
        //     title: req.body.title,
        //     author: req.body.author,
        //     genre: req.body.genre
        // });

        const newBook = await Book.create(req.body);
        
        const successResponse = {
            message: "success",
            newBook: newBook
        }
        res.status(201).json(successResponse); 
    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
};

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        const successResponse = {
            message: "success",
            books: allBooks
        }
        res.status(200).json(successResponse);
    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
};


const updateBookAuthor = async (req, res) => {
    try {
        const updatedBook =  await Book.findOneAndUpdate(
            {title: req.body.title},
            {author: req.body.newAuthor},
            {new: true}
        );
        const successResponse = {
            message: "success",
            updatedBook: updatedBook
        }
        res.status(200).json(successResponse);
    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
};

const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.deleteOne({title: req.body.title});
        const successResponse = {
            message: "success",
            deleted: deletedBook
        }
        res.status(200).json(successResponse);

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
};

const deleteAllBooks = async (req, res) => {
    try {
        const deletedBook = await Book.deleteMany({});
        const successResponse = {
            message: "success",
            deleted: deletedBook
        }
        res.status(200).json(successResponse);

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
};


const updateBook = async (req, res) => {
    try {
        let searchedTitle = {title: req.body.title};
        
        const updatedBook =  await Book.findOneAndUpdate(
            searchedTitle,
            {
                title: req.body.newtitle,
                author: req.body.newAuthor,
                genre: req.body.newGenre
            },
            {new: true}
        );
        const successResponse = {
            message: "success",
            updatedBook: updatedBook
        }
        res.status(200).json(successResponse);
    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
};

const getBookByTitle = async (req, res) => {
    try {
        const BookByTitle = await Book.find({title: req.params['bookTitle']});
        const successResponse = {
            message: "success",
            books: BookByTitle
        }
        res.status(200).json(successResponse);
    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
};




module.exports = {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook,
    deleteAllBooks,
    updateBookAuthor,
    getBookByTitle
}