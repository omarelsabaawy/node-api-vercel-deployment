const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose
            .connect("mongodb+srv://omarelsabaawy77:omarelsabaawy77@cluster0.zxczamf.mongodb.net/swappify");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDatabase;