const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detailController');

router.get('/detail/:uniqueid', detailController.getAllUserDetails);

module.exports = router;