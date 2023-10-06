const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose
            .connect(process.env.MONGO_URI);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDatabase;