const Router = require('express')
const router = new Router()
const userController = require('../controller/user')

router.post('/user/login', userController.login)
router.post('/user/registration', userController.registration)

module.exports = router
