const router = require('express').Router()
const ServerController = require('../controllers/ServerController')

router.get('/cinta', ServerController.asrul)

module.exports = router