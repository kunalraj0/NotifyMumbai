const router = require('express').Router();
const authenticate = require('../middleware/auth');
const ctrl = require('../controllers/setting');

router.get('/settings', authenticate, ctrl.find);

module.exports = router;
