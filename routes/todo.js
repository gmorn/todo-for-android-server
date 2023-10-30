const Router = require('express')
const router = new Router()
const todoController = require('../controller/todo')

router.post('/todo/add', todoController.add)
router.put('/todo/complete', todoController.complete)
router.put('/todo/update', todoController.update)
router.delete('/todo/delete', todoController.delete)
router.get('/todo/getTodoByUserId', todoController.getTodoByUserId)

module.exports = router