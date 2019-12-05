const express = require('express')
const todosController = require('../controllers/todos.controller')
const todosValidator = require('../middleware/todos.validator')

const router = express.Router()

// * GET - /api/todos - Fetch all users
router.get('', todosController.fetch)

// * POST - /api/todos- Add Todo
router.post('', todosValidator.validate('create'), todosController.create)

module.exports = router
