const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");

    } catch (err) {
        console.error("Database connection failed", err);

    }
}

module.exports = connectDb;