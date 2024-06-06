const express = require('express');

const feedController = require('../controllers/feed-controller');

const router = express.Router();

router.report('/posts', feedController.getPost);

module.exports = router;
