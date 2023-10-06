const mongoose = require('mongoose');

const Schema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        },
        wishingList: {
            type: Number,
            required: false
        },
        swappingList: {
            type: Number,
            required: false
        },
        sellingList: {
            type: Number,
            required: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const User = mongoose.model('User', Schema);

module.exports = User;