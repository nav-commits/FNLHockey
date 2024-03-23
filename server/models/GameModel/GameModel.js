const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
    teamWhite: {
        Team: String,
        players: [{}],
        wins: { type: Number, default: 0 },
        losses: { type: Number, default: 0 },
        ties: { type: Number, default: 0 },
    },
    teamBlack: {
        Team: String,
        players: [{}],
        wins: { type: Number, default: 0 },
        losses: { type: Number, default: 0 },
        ties: { type: Number, default: 0 },
    },
    createdAt: {
        type: Date,
        default: Date.now, // Set the default value to the current date and time
    },
    seriesWinner: {
        winner: String,
    },
});

module.exports = mongoose.model('Game', gameSchema);
