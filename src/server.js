require("dotenv").config();
require("./db/connection");

const express = require("express");

const port = 5001;

const Book = require("./books/model")
const bookRouter = require("./books/routes")

const app = express();

app.use(express.json());

app.use(bookRouter)

app.get("*", (req, res) => {
    res.status(404).send("<h1>404 page not found</h1>");
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
});

