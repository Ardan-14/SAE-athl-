const express = require('express');
const router = express.Router();
const ContenusController = require('../controllers/ContenusController');

// Route pour récupérer les contenus par page
router.get('/contenus', ContenusController.getContenusByPage);

module.exports = router;
