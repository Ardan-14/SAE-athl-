const express = require('express');
const router = express.Router();
const ContactsController = require('../controllers/ContactsController');

// Route pour récupérer les contacts par page
router.get('/contact', ContactsController.getContactPage);

module.exports = router;
