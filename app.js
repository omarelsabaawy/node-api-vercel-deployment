// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const connectToDatabase = require('./Config/db');
const User = require('./Models/User');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
    connectToDatabase();
    console.log(`API listening on PORT ${process.env.PORT} `)
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_TOKEN, {
        expiresIn: "30d",
    });
};

app.post('/new-user', async (req, res) => {
    const { email, password, phoneNumber, location, longitude, latitude, avatar } = req.body;

    if (!email || !password || !phoneNumber || !location || !longitude || !latitude || !avatar) {
        return res.status(400).json({
            status: false,
            message: "All fields are required."
        });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                status: false,
                message: "This email is attached to another user."
            });
        }

        const saltRounds = 10;
        const encryptedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            email,
            password: encryptedPassword,
            phoneNumber,
            location,
            longitude,
            latitude,
            avatar
        });

        await newUser.save();

        return res.status(201).json({
            status: true,
            message: "User account successfully created.",
            id: newUser._id,
            email: newUser.email,
            phoneNumber: newUser.phoneNumber,
            avatar: newUser.avatar,
            access_token: generateToken(newUser._id)
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            error: "Internal Server Error: There was an issue while creating the user account."
        });
    }
})

app.get('/', (req, res) => {
    res.send('Hey this is my API running on My Port 🥳')
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app