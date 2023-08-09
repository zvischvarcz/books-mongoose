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
    
}

module.exports = {
    addBook
}