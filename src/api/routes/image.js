const express = require('express');
const uploadImage = require('../../lib/uploadImage');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.post('/upload', uploadImage.single('avatar'), imageController.uploadImage);

module.exports = router;
