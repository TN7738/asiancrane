const mongoose = require('mongoose');

const collectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
});

mongoose.model('Collect', collectSchema);