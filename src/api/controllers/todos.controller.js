const Todo = require('../models/Todo')
const { validationResult } = require('express-validator')
const ApplicationError = require('../../utils/ApplicationError')
const ErrorCodes = require('../../utils/ErrorCodes')

// * FETCH
module.exports.fetch = async (req, res, next) => {
  try {
    const todos = await Todo.find()
    res.status(200).send({ todos })
  } catch (err) {
    next(new ApplicationError([{ msg: err.message }]))
  }
}

// * CREATE
module.exports.create = async (req, res, next) => {
  const title = req.body.title
  const content = req.body.content

  // ? Validate
  const errors = validationResult(req)
  if (!errors.isEmpty()) return next(new ApplicationError(errors.array(), 422, ErrorCodes.INVALID_INPUT_ERROR))

  const newTodo = new Todo({ title, content })

  try {
    const savedTodo = await newTodo.save()
    res.status(201).send({ todo: savedTodo })
  } catch (err) {
    next(new ApplicationError([{ msg: err.message }]))
  }
}


