const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.get('/hello', UserController.siapa)

router.get('/kucing', function(req, res) {
    res.send("Hellow Ini router kucing")
})

module.exports = router