const { Router } = require('express');
const controller = require('../controller/controller.js');

const router = Router();
router.get('/', controller.getData);

router.post('/', controller.addData);

module.exports = router;