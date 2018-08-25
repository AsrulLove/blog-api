const router = require('express').Router()
const ServerController = require('../controllers/ServerController')

router.get('/home', ServerController.home)

module.exports = router