const express = require('express');
const router = express.Router();
const playerStatus = require('../../models/PlayerStatus/PlayerStatus');

router.post('/addPlayerStatus', async (req, res) => {
    try {
        const addStatus = await playerStatus.create(req.body);
        res.status(201).json(addStatus); // Respond with status code 201 for created
    } catch (error) {
        res.status(500).json({ error: error.message }); // Sending actual error message
    }
});

router.get('/status/:id', async (req, res) => {
    try {
        const findPlayerStatusById = await playerStatus.findById(req.params.id);
        if (!findPlayerStatusById) {
            return res.status(404).json({ error: 'Status not found.' });
        }
        res.json(findPlayerStatusById);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletePlayerStatus = await playerStatus.findByIdAndDelete(req.params.id);
        if (!deletePlayerStatus) {
            return res.status(404).json({ error: 'Status not found.' });
        }
        res.json(deletePlayerStatus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
