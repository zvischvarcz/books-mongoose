const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully conected to DB");
    } catch (error) {
        console.log(error);
    }
}

connection();