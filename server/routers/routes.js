const router = require('express').Router();
const weatherController = require('../controllers/weatherControllers');
const userController = require('../controllers/userControllers');
const forecastController = require('../controllers/forecastControllers');

router.get('/', (req, res) => { res.send() });

router.get('/users', userController.get);
router.post('/users', userController.post);

router.get('/weather', weatherController.get);
router.post('/weather', weatherController.post);

router.get('/forecasts', forecastController.get);

module.exports = router;