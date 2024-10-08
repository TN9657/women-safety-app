const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    suspectImage: String, // Base64 or URL
    currentLocation: {
        lat: Number,
        lng: Number
    },
    destinationLocation: {
        lat: Number,
        lng: Number
    },
    otpStatus: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);
