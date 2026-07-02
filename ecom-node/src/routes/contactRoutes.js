const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/contactController');

// POST /api/contact
router.post('/contact', createContact);

module.exports = router;
