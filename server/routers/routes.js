const router = require('express').Router();
const weatherController = require('../controllers/weatherControllers');
const userController = require('../controllers/userControllers');

router.get('/', (req, res) => { res.send() });
router.get('/users', userController.get);
router.post('/users', userController.post);
router.get('/weather', weatherController.get);
router.post('/weather', weatherController.post);

module.exports = router;