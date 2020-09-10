const express = require('express');
const router = express.Router();
const calificar = require('../controllers/calificar.controller');

// POST
router.post('/', calificar.calificarConversacion);

module.exports = router;