const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const todosRoutes = require('./api/routes/todos.routes')
const ErrorCodes = require('./utils/ErrorCodes')
const ApplicationError = require('./utils/ApplicationError')
const sarahRoutes = require('./api/routes/sarah.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// ? Handle JSON error
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return next(new ApplicationError([{ msg: 'Invalid JSON payload' }], 401, ErrorCodes.INVALID_PAYLOAD_ERROR))
  }
  next()
})

// ? Routes
app.use('/api/todos', todosRoutes)
app.use('/api/sarah', sarahRoutes)

// ? Catch unknow URIs
app.use((req, res, next) => {
  return next(new ApplicationError([{ msg: 'Invalid endpoint' }],
    404, ErrorCodes.INVALID_ENDPOINT_ERROR))
})

// ? Error handler
app.use((error, req, res, next) => {
  res.status(error.statusCode).send({ error })
  next()
})


module.exports = app