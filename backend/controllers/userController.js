const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Save user journey data
router.post('/save-journey', async (req, res) => {
    const { name, email, phoneNumber, suspectImage, currentLocation, destinationLocation } = req.body;

    try {
        const user = new User({ name, email, phoneNumber, suspectImage, currentLocation, destinationLocation });
        await user.save();
        res.status(200).json({ message: 'Journey data saved', user });
    } catch (err) {
        res.status(500).json({ message: 'Error saving data', error: err });
    }
});

module.exports = router;
