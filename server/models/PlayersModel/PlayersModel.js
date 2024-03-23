const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    id: Number,
    name: String,
    team: [String],
    age: Number,
    username: String,
    shootHand: String,
    img: String,
    position: String,
    number: Number,
});

module.exports = mongoose.model('players', playerSchema);
