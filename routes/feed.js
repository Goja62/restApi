const express = require('express');

const feedController = require('../controllers/feed-controller');

const router = express.Router();

router.get('/feed', feedController.getPost);

router.post('/post', feedController.createtPost);

module.exports = router;
